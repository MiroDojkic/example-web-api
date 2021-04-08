import { Migration } from '@mikro-orm/migrations';

export class Migration20210408164836 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" add column "organisation_id" int4 not null;');

    this.addSql('alter table "user" add constraint "user_organisation_id_foreign" foreign key ("organisation_id") references "user" ("id") on update cascade;');
  }

}
