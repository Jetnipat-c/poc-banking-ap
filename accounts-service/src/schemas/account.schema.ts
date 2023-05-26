import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from 'src/libs/common';

export enum AccountType {
  SAVINGS = 'savings',
  CURRENT = 'current',
  FIXED = 'fixed',
}

@Schema({ versionKey: false })
export class Account extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  balance: number;

  @Prop()
  accountNumber: string;

  @Prop({ type: String, enum: AccountType, default: AccountType.SAVINGS })
  accountType: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
