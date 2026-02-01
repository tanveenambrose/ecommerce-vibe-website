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
        console.log('Received order creation request');
        console.log('User ID:', req.user.userId);
        console.log('Order Data:', JSON.stringify(createOrderDto, null, 2));

        return this.ordersService.create(req.user.userId, createOrderDto)
            .catch(error => {
                console.error('Order creation failed in controller:', error);
                throw error;
            });
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
