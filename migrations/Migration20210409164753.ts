import { Migration } from '@mikro-orm/migrations';

export class Migration20210409164753 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "organisation" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null);');

    this.addSql('create table "user" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "organisation_id" int4 not null, "full_name" varchar(255) not null, "address" varchar(255) null, "active" bool null default true);');

    this.addSql('alter table "user" add constraint "user_organisation_id_foreign" foreign key ("organisation_id") references "organisation" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    const knex = this.getKnex();
    this.addSql(knex.schema.dropTable('user').toQuery());
    this.addSql(knex.schema.dropTable('organisation').toQuery());
  }

}
