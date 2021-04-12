import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,   //serve para remover automaticamente key/values não mapeados no DTO
      transform: true,
      forbidNonWhitelisted: true,  //retorna Bad Request se enviar key/value não mapeado   
    }),
  );
  await app.listen(3000);
}
bootstrap();