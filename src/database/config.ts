import User from '../user/model';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

export default {
  driver: PostgreSqlDriver,
  clientUrl: process.env.DATABASE_URL,
  entities: [User]
};
