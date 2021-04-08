import { Repository, EntityRepository } from '@mikro-orm/core';
import { IContainer } from 'bottlejs';
import { IOrganisationRepository } from './IOrganisationRepository';
import Organisation from './model';

@Repository(Organisation)
class OrganisationRepository extends EntityRepository<Organisation> implements IOrganisationRepository {
  public save(organisation: Organisation) {
    return this.persistAndFlush(organisation);
  }
}

export default ({ dbProvider }: IContainer) => dbProvider.em.getRepository(Organisation);
