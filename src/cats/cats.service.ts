/*
 * @description: 服务类，负责数据的存储和检索
 * @author: zpl
 * @Date: 2019-12-20 16:46:40
 * @LastEditTime : 2019-12-23 09:29:54
 * @LastEditors  : zpl
 */
import { Injectable } from '@nestjs/common';
import {Cat} from './interfaces/cats.interface'

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat){
    this.cats.push(cat);
  }

  findAll(): Cat[]{
    return this.cats;
  }
}
