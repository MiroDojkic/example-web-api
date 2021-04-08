import { Entity, Property } from '@mikro-orm/core';
import Model from '../database/Model';

@Entity()
export class User extends Model {
  @Property()
  name!: string;
}

export default User;
