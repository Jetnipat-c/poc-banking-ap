import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { RmqModule } from './libs/common/rmq/rmq.module';
import { DatabaseModule } from './libs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './schemas/account.schema';
import { AccountsRepository } from './accounts.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_ACCOUNTS_QUEUE: Joi.string().required(),
        MONGODB_URI: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
    RmqModule,
  ],
  controllers: [AccountsController],
  providers: [AccountsService, AccountsRepository],
})
export class AccountsModule {}
