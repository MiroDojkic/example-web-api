import { PrimaryKey, Property, SerializedPrimaryKey } from '@mikro-orm/core';

export abstract class Model {
  @PrimaryKey()
  id!: number;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}

export default Model;
