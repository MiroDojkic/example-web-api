import { PrimaryKey, Property, SerializedPrimaryKey } from '@mikro-orm/core';

export abstract class Model {
  @PrimaryKey()
  _id!: number;

  @SerializedPrimaryKey()
  id!: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();
}

export default Model;
