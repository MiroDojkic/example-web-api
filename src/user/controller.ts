import { Request, Response, NextFunction, Router } from 'express';
import { IContainer } from 'bottlejs';

function UserController({ userRepository }: IContainer) {
  async function getAll(req: Request, res: Response, next: NextFunction) {
    const users = await userRepository.find();
    return res.send(users);
  }

  return { getAll };
}

export default UserController;
