import { Migration } from '@mikro-orm/migrations';

export class AddAddressToUser20210409092259 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" add column "address" varchar(255) null;');
  }

}
