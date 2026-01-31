import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): object {
    return {
      message: 'E-commerce API is running successfully',
      version: '1.0.0',
      endpoints: {
        auth: '/auth',
        orders: '/orders'
      }
    };
  }
}
