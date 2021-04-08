import { EntityRepository } from "@mikro-orm/core";

export interface IRepository<T> extends EntityRepository<T> {};
