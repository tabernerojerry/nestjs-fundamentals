import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';

@Module({
  imports: [
    ConfigModule.forFeature(coffeesConfig), // Partial config registration
    TypeOrmModule.forFeature([Coffee, Flavor, Event])
  ],
  providers: [CoffeesService],
  controllers: [CoffeesController],
  exports: [CoffeesService],
})
export class CoffeesModule {}
