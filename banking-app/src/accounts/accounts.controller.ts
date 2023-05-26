import { Body, Controller, Post } from '@nestjs/common';
import { CreateAccountDTO } from './dto/create-account.dto';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}
  @Post()
  async createOrder(@Body() createAccountDTO: CreateAccountDTO) {
    return this.accountsService.createAccount(createAccountDTO);
  }
}
