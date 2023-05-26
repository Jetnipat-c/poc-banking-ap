import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { AccountsService } from './accounts.service';
import { CreateAccountDTO } from './dto/create-account.dto';

@Controller()
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @EventPattern('account_created')
  async handleAccountCreatedEvent(
    @Payload() createAccountDTO: CreateAccountDTO,
  ) {
    this.accountsService.handleAccountCreatedEvent(createAccountDTO);
  }
}
