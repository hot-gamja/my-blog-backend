import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  userService: any;
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users')
  getAll() {
    return this.appService.findAll();
  }

  @Get('/user/:id')
  getOne(@Param('id') id) {
    return this.appService.findOne(id);
  }

  @Post('/user')
  create(@Body() body) {
    return this.appService.create(body);
  }

  @Put('/user/:id')
  update(@Param('id') id, @Body() body) {
    return this.appService.update(id, body);
  }

  @Delete('/user/:id')
  remove(@Param('id') id) {
    return this.appService.remove(id);
  }
}
