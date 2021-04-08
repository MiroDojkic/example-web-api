import { Request, Response } from 'express';
import { IContainer } from 'bottlejs';
import castArray from 'lodash/castArray';
import User from './model';

function UserController({ userRepository }: IContainer) {
  async function getAll(req: Request, res: Response) {
    const includeQuery = castArray(req.query.include);
    const include = [];
    const includeOrganisation = includeQuery.includes('organisation');
    if (includeOrganisation) {
      include.push('organisation');
    }
    const filter = req.organisation
      ? { organisation: req.organisation }
      : {};
    const users = req.query.active
      ? await userRepository.findActive(filter, include)
      : await userRepository.find(filter, include);
    return res.send(users);
  }

  async function create(req: Request, res: Response) {
    const { organisation } = req;
    const { fullName } = req.body;
    const user = new User(fullName);
    if (!organisation) return res.status(400);
    user.organisation = organisation;
    await userRepository.save(user);
    return res.send(user)
  }

  return { getAll, create };
}

export default UserController;
