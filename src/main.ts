import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

(async () => {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  const port = process.env.PORT || 3000;

  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(
    new ValidationPipe({
      // It will auto remove payload that is not exist in DTO
      whitelist: true,
      // It will throw an error if some payload value is not exist in DTO
      forbidNonWhitelisted: true,
      // It will auto transform payload to DTO instances (NOTE: it will affect app speed)
      transform: true,
      transformOptions: {
        enableImplicitConversion: true, // It will auto transform types (Example: string to number)
      },
    }),
  );

  await app.listen(port, () => {
    Logger.log(`Listening at http:localhost:${port}/${globalPrefix}`);
  });
})();
