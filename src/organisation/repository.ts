import { Repository, EntityRepository } from '@mikro-orm/core';
import { IContainer } from 'bottlejs';
import Organisation from './model';

@Repository(Organisation)
class OrganisationRepository extends EntityRepository<Organisation> {
  public save(organisation: Organisation) {
    return this.persistAndFlush(organisation);
  }
}

export default ({ dbProvider }: IContainer) => dbProvider.em.getRepository(Organisation);
