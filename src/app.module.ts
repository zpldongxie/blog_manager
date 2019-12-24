import { Module, NestModule, MiddlewareConsumer, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core'
// import { ValidationPipe } from './common/validation.pipe';
import {LoggerMiddleware} from './common/middleware/logger.middleware'

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    },
    AppService
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(LoggerMiddleware).forRoutes('/');
  }
}
