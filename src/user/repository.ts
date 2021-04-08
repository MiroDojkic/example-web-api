import { Repository, EntityRepository } from '@mikro-orm/core';
import { IContainer } from 'bottlejs';
import User from './model';

@Repository(User)
class UserRepository extends EntityRepository<User> {
  public findActive() {
    return this.find({ active: true });
  }

  public save(user: User) {
    return this.persistAndFlush(user);
  }
}

export default ({ dbProvider }: IContainer) => dbProvider.em.getRepository(User);
