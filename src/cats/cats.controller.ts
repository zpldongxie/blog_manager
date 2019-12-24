/*
 * @description: 控制类，定义路由
 * @author: zpl
 * @Date: 2019-12-20 10:05:06
 * @LastEditTime : 2019-12-24 09:25:26
 * @LastEditors  : zpl
 */
import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from 'src/common/roles.guard';
import { LoggingInterceptor } from 'src/common/interceptor/logging.interceptor';
import { TransformInterceptor } from 'src/common/interceptor/transform.interceptor';
import { CreateCatDto, UpdateCatDto } from './dto/dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface';
import { Roles } from 'src/common/roles.decorator';

@Controller('cats')
@UseGuards(AuthGuard)
@UseInterceptors(LoggingInterceptor)
@UseInterceptors(TransformInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService) { }

  @Post()
  @Roles('admin')
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat.`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
