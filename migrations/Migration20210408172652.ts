import { Migration } from '@mikro-orm/migrations';

export class Migration20210408172652 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" drop constraint "user_organisation_id_foreign";');
    this.addSql('alter table "user" add constraint "user_organisation_id_foreign" foreign key ("organisation_id") references "organisation" ("id") on update cascade;');
  }

}
