import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [
    CoffeesModule,
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
// start 24 video
