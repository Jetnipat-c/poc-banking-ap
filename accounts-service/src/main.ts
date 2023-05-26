import { NestFactory } from '@nestjs/core';
import { AccountsModule } from './accounts.module';
import { RmqService } from './libs/common/rmq/rmq.service';

async function bootstrap() {
  const app = await NestFactory.create(AccountsModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('ACCOUNTS'));
  await app.startAllMicroservices();
}
bootstrap();
