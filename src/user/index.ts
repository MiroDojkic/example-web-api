import { Router } from 'express'
import { IContainer } from 'bottlejs';
import Repository from './repository';
import Controller from './controller';

function UserRouter({ userController }: IContainer) {
  const router = Router();

  router.get('/', userController.getAll);

  return { route: '/users', router };
}

export default {
  Router: UserRouter,
  Controller,
  Repository
};
