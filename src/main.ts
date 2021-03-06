import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';
import { WrapResponseInterceptor } from './common/interceptors/wrap-response.interceptor';

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
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(
    new WrapResponseInterceptor(),
    new TimeoutInterceptor(),
  );

  /**
   * Swagger Documentation
   */
  const options = new DocumentBuilder()
    .setTitle('StarCoffee')
    .setDescription('Coffee Apps')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(globalPrefix, app, document);

  await app.listen(port, () => {
    Logger.log(`Listening at http:localhost:${port}/${globalPrefix}`);
  });
})();
