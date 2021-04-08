import { IContainer } from 'bottlejs';
import { Router } from 'express';

export interface IRouter {
  route: string,
  router: Router
}

export type RouterFactory = (...services: any[]) => IRouter;
