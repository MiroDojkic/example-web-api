import { Entity, Property } from '@mikro-orm/core';
import Model from '../database/Model';

@Entity()
export class User extends Model {
  @Property()
  fullName!: string;

  @Property({ nullable: true, default: true })
  active: boolean;

  constructor(fullName: string, active: boolean = true) {
    super();
    this.fullName = fullName;
    this.active = active;
  }
}

export default User;
