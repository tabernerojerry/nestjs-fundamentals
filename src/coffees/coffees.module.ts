import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { CoffeeEntity } from './entities/coffee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CoffeeEntity])],
  providers: [CoffeesService],
  controllers: [CoffeesController],
})
export class CoffeesModule {}
