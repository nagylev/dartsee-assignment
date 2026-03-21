import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Dartsee Backend API')
    .setDescription('Dartsee Backend API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  /* eslint-disable no-console */
  fs.writeFile(
    './../../swagger.json',
    JSON.stringify(document),
    'utf8',
    (err) => {
      if (err) {
        console.log(
          'The following error occurred when createing swagger.json: ',
          err,
        );
      }
    },
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
