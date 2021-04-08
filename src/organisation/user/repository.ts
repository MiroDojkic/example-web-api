import { Repository, EntityRepository } from '@mikro-orm/core';
import { IContainer } from 'bottlejs';
import { IUserRepository } from './IUserRepository';
import User from './model';

@Repository(User)
class UserRepository extends EntityRepository<User> implements IUserRepository {
  public findActive(filter: Object, include: string[]) {
    return this.find({ ...filter, active: true }, include);
  }

  public save(user: User) {
    return this.persistAndFlush(user);
  }
}

export default ({ dbProvider }: IContainer) => dbProvider.em.getRepository(User);
