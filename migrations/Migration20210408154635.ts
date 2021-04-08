import { Migration } from '@mikro-orm/migrations';

export class Migration20210408154635 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" add column "active" bool null;');
  }

}
