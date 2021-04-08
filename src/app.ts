import { RequestContext } from '@mikro-orm/core';
import { IContainer } from 'bottlejs';
import App from 'express';
import bodyParser from 'body-parser';
import { mapRouters } from './serviceProvider';

function AppProvider({ dbProvider }: IContainer) {
  const app = App();
  app.use(bodyParser.json())
  app.use((req, res, next) => {
    RequestContext.create(dbProvider.em, next);
  })
  mapRouters(({ route, router }) => {
    app.use(route, router);
  })
  return app;
}

export default AppProvider;
