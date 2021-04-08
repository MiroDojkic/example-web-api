import { IRepository } from '../../types/Repository';
import User from './model';

export interface IUserRepository extends IRepository<User> {
  findActive(filter: Object, include: string[]): Promise<User[]>,
  save(user: User): Promise<void>
}
