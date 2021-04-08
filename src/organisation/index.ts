import path from 'path';
import App from 'express';
import { IContainer } from 'bottlejs';
import Organisation from './model';
import { IRouter } from '../types/Router';
import { IUserRouter } from './user/IUserRouter';
import { IController } from '../types/Controller';
import { IOrganisationRepository } from './IOrganisationRepository';

declare module 'express-serve-static-core' {
  interface Request {
    organisation?: Organisation
  }
}

function OrganisationRouter ({
  organisationController,
  organisationRepository,
  userRouter
}: IContainer): IRouter {
  const router = App.Router();
  router.param('organisationId', getOrganisation(organisationRepository));

  router
    .get('/', organisationController.getAll)
    .post('/', organisationController.create)
    .get('/:organisationId', organisationController.get);

  mount(router, '/:organisationId', userRouter);

  return { route: '/organisations', router };
}

export { OrganisationRouter as Router };
export { default as Repository } from './repository';
export { default as Controller } from './controller';

function mount(router: App.Router, mountPath: string, subRouter: IRouter) {
  router.use(path.join(mountPath, subRouter.route), subRouter.router);
}

function getOrganisation(organisationRepository: IOrganisationRepository) {
  return (req: App.Request, res: App.Response, next: App.NextFunction, id: number) => {
    return organisationRepository.findOne({ id })
    .then(organisation => {
      if (!organisation) return next();
      req.organisation = organisation;
      next();
    });
  }
}
