import { Injectable } from '@nestjs/common';
import { AccountsRepository } from './accounts.repository';
import { CreateAccountDTO } from './dto/create-account.dto';

@Injectable()
export class AccountsService {
  constructor(private readonly accountsRepository: AccountsRepository) {}

  async createAccount(createAccountDTO: CreateAccountDTO) {
    let randomAccountNumber = '';
    for (let i = 0; i < 10; i++) {
      randomAccountNumber += Math.floor(Math.random() * 10).toString();
    }
    const docs = await this.accountsRepository.find({
      accountNumber: randomAccountNumber,
    });
    if (docs.length > 0) {
      return this.createAccount(createAccountDTO);
    }

    return this.accountsRepository.create({
      ...createAccountDTO,
      accountNumber: randomAccountNumber,
    });
  }
}
