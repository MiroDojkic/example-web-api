import { Collection, Entity, OneToMany, Property } from '@mikro-orm/core';
import Model from '../database/Model';
import User from './user/model';

@Entity()
export class Organisation extends Model {
  @OneToMany(() => User, user => user.organisation)
  users!: Collection<User>;

  @Property()
  name!: string;

  constructor(name: string) {
    super();
    this.name = name;
  }
}

export default Organisation;
