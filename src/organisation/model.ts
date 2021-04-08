import { Entity, Property } from '@mikro-orm/core';
import Model from '../database/Model';

@Entity()
export class Organisation extends Model {
  @Property()
  name!: string;

  constructor(name: string) {
    super();
    this.name = name;
  }
}

export default Organisation;
