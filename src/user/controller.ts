import { Request, Response, NextFunction, Router } from 'express';
import { IContainer } from 'bottlejs';
import User from './model';

function UserController({ userRepository }: IContainer) {
  async function getAll(req: Request, res: Response, next: NextFunction) {
    if (req.query.active) {
      const users = await userRepository.findActive();
      return res.send(users);
    }
    const users = await userRepository.find();
    return res.send(users);
  }

  async function create(req: Request, res: Response, next: NextFunction) {
    const { fullName } = req.body;
    const user = new User(fullName);
    await userRepository.save(user);
    return res.send(user)
  }

  return { getAll, create };
}

export default UserController;
