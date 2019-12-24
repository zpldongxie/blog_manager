/*
 * @description: 应用入口
 * @author: zpl
 * @Date: 2019-12-19 17:39:51
 * @LastEditTime : 2019-12-24 11:03:51
 * @LastEditors  : zpl
 */
import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/',
  });
  app.setViewEngine({
    engine: {
      handlebars: require('handlebars'),
    },
    templates: join(__dirname, '..', 'views')
  });

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
