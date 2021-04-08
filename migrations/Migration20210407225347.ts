import { Migration } from '@mikro-orm/migrations';

export class Migration20210407225347 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("_id" serial primary key, "id" varchar(255) not null, "name" varchar(255) not null);');
  }

}
