import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Order, OrderDocument, OrderStatus } from './order.schema';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
    constructor(
        @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    ) { }

    async create(userId: string, createOrderDto: CreateOrderDto): Promise<Order> {
        // Generate unique order number
        const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substring(7).toUpperCase()}`;

        // Calculate estimated delivery (7-10 days from now)
        const estimatedDelivery = new Date();
        estimatedDelivery.setDate(estimatedDelivery.getDate() + Math.floor(Math.random() * 4) + 7);

        const order = new this.orderModel({
            userId: new Types.ObjectId(userId),
            orderNumber,
            ...createOrderDto,
            status: OrderStatus.PENDING,
            estimatedDelivery,
        });

        return order.save();
    }

    async findByUserId(userId: string): Promise<Order[]> {
        return this.orderModel
            .find({ userId: new Types.ObjectId(userId) })
            .sort({ createdAt: -1 })
            .exec();
    }

    async findOne(id: string, userId: string): Promise<Order> {
        const order = await this.orderModel.findOne({
            _id: new Types.ObjectId(id),
            userId: new Types.ObjectId(userId),
        }).exec();

        if (!order) {
            throw new NotFoundException('Order not found');
        }

        return order;
    }

    async updateStatus(id: string, status: OrderStatus): Promise<Order> {
        const order = await this.orderModel.findById(id);

        if (!order) {
            throw new NotFoundException('Order not found');
        }

        order.status = status;

        // If status is shipped, generate tracking number
        if (status === OrderStatus.SHIPPED && !order.trackingNumber) {
            order.trackingNumber = `TRK${Date.now()}${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
        }

        // If status is delivered, set delivered date
        if (status === OrderStatus.DELIVERED && !order.deliveredAt) {
            order.deliveredAt = new Date();
        }

        return order.save();
    }

    async findAll(): Promise<Order[]> {
        return this.orderModel.find().sort({ createdAt: -1 }).exec();
    }
}
