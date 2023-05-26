import { Injectable, Logger } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Account } from './schemas/account.schema';
import { AbstractRepository } from 'src/libs/common';

@Injectable()
export class AccountsRepository extends AbstractRepository<Account> {
  protected readonly logger = new Logger(AccountsRepository.name);

  constructor(
    @InjectModel(Account.name) accountModel: Model<Account>,
    @InjectConnection() connection: Connection,
  ) {
    super(accountModel, connection);
  }
}
