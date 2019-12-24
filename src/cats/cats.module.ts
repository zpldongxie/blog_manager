/*
 * @description: 通过@Module把同一应用程序域的代码组织起来，明确各功能代码的边界，有利于使用SOLID原理进行开发
 * @author: zpl
 * @Date: 2019-12-20 17:46:30
 * @LastEditTime : 2019-12-20 17:54:07
 * @LastEditors  : zpl
 */
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller'
import { CatsService } from './cats.service'

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}