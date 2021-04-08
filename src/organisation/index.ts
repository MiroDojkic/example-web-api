import { Router } from 'express'
import { IContainer } from 'bottlejs';

function OrganisationRouter({ organisationController }: IContainer) {
  const router = Router();
  router
    .get('/', organisationController.getAll)
    .post('/', organisationController.create);

  return { route: '/organisations', router };
}

export { OrganisationRouter as Router };
export { default as Repository } from './repository';
export { default as Controller } from './controller';
