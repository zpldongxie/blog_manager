/*
 * @description: 入口控制器
 * @author: zpl
 * @Date: 2019-12-19 17:39:51
 * @LastEditTime : 2019-12-24 10:37:22
 * @LastEditors  : zpl
 */
import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('index.hbs')
  getHello() {
    return { message: this.appService.getHello() };
  }
}
