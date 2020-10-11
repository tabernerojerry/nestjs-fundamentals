import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoffeesModule } from './coffees/coffees.module';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'qwerty123',
      database: 'postgres',
      autoLoadEntities: true,
      // Make sure to disable synchronize in production
      synchronize: true,
    }),
    CoffeesModule,
    CoffeeRatingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
