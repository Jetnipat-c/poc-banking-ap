import { IsEnum, IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { AccountType } from '../schemas/account.schema';

export class CreateAccountDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPositive()
  balance: number;

  @IsNotEmpty()
  @IsEnum(AccountType)
  accountType: AccountType;
}
