import { Inject, Injectable } from '@nestjs/common';
import { AccountsRepository } from './accounts.repository';
import { CreateAccountDTO } from './dto/create-account.dto';
import { ClientProxy } from '@nestjs/microservices';
import { ACCOUNTS_SERVICE } from './constants/services';

@Injectable()
export class AccountsService {
  constructor(
    private readonly accountsRepository: AccountsRepository,
    @Inject(ACCOUNTS_SERVICE) private accountsClient: ClientProxy,
  ) {}

  async createAccount(createAccountDTO: CreateAccountDTO) {
    return this.accountsClient.emit('account_created', createAccountDTO);
  }
}
