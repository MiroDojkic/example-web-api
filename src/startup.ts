import App from './app';
import { MikroORM } from '@mikro-orm/core';
import { init } from './database';
import serviceProvider, { registerModule } from './serviceProvider';
import dbConfig from './database/config';
import * as OrganisationModule from './organisation';
import * as UserModule from './user';

async function configure() {
  const dbProvider = await init(dbConfig);
  serviceProvider.value('dbProvider', dbProvider);
  registerModule('organisation', OrganisationModule);
  registerModule('user', UserModule);
  serviceProvider.factory('app', App);
  return serviceProvider.container;
}

configure().then(({ app }) => {
  app.listen(3000, () => {
    console.log('App started at port 3000');
  })
});

