import { Injectable } from '@nestjs/common';
import { CreateAccountDTO } from './dto/create-account.dto';
import { AccountsRepository } from './accounts.repository';

@Injectable()
export class AccountsService {
  constructor(private readonly accountsRepository: AccountsRepository) {}

  async handleAccountCreatedEvent(createAccountDTO: CreateAccountDTO) {
    let randomAccountNumber = '';
    for (let i = 0; i < 10; i++) {
      randomAccountNumber += Math.floor(Math.random() * 10).toString();
    }
    const docs = await this.accountsRepository.find({
      accountNumber: randomAccountNumber,
    });
    if (docs.length > 0) {
      return this.handleAccountCreatedEvent(createAccountDTO);
    }
    return this.accountsRepository.create({
      ...createAccountDTO,
      accountNumber: randomAccountNumber,
    });
  }
}
