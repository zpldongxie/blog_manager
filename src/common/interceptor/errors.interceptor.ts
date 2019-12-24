/*
 * @description: 通过拦截器实现异常映射
 * @author: zpl
 * @Date: 2019-12-24 09:33:18
 * @LastEditTime : 2019-12-24 09:35:32
 * @LastEditors  : zpl
 */
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  BadGatewayException,
  CallHandler,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        catchError(err => throwError(new BadGatewayException())),
      );
  }
}
