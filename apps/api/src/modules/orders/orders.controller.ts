import { Controller, Get, Post, Body, Param, UseGuards, Req } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) { }

    @Post()
    create(@Req() req, @Body() createOrderDto: CreateOrderDto) {
        return this.ordersService.create(req.user.userId, createOrderDto);
    }

    @Get()
    findAll(@Req() req) {
        return this.ordersService.findByUserId(req.user.userId);
    }

    @Get(':id')
    findOne(@Req() req, @Param('id') id: string) {
        return this.ordersService.findOne(id, req.user.userId);
    }
}
