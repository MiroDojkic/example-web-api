import { IRepository } from '../types/Repository';
import { Organisation } from './model';

export interface IOrganisationRepository extends IRepository<Organisation> {
  save(organisation: Organisation): Promise<void>;
}
