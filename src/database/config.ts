import yn from 'yn';
import Organisation from '../organisation/model';
import User from '../user/model';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

export default {
  driver: PostgreSqlDriver,
  clientUrl: process.env.DATABASE_URL,
  debug: yn(process.env.DEBUG),
  entities: [Organisation, User]
};
