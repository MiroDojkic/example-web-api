import { MikroORM, Options } from '@mikro-orm/core';
import config from './config';

let dbProvider: MikroORM | null = null;

async function init(config: Options) {
  if (dbProvider) throw new Error('Database provider already exists.');
  dbProvider = await MikroORM.init(config)
  return dbProvider;
}

export { init };

