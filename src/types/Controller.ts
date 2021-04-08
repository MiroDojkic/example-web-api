import { Request, Response, NextFunction } from 'express';

export interface IController {
  [method: string]: (req: Request, res: Response, next: NextFunction) => void
};

export type ControllerFactory = (...services: any[]) => IController
