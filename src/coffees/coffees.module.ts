import { Module } from '@nestjs/common';

import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

@Module({
  providers: [CoffeesService],
  controllers: [CoffeesController],
})
export class CoffeesModule {}
