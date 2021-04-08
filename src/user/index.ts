import { Router } from 'express'
import { IContainer } from 'bottlejs';

function UserRouter({ userController }: IContainer) {
  const router = Router();
  router
    .get('/', userController.getAll)
    .post('/', userController.create);

  return { route: '/users', router };
}

export { UserRouter as Router };
export { default as Repository } from './repository';
export { default as Controller } from './controller';
