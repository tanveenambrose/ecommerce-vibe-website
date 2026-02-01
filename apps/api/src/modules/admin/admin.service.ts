import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../users/user.schema';
import { Order, OrderDocument } from '../orders/order.schema';

@Injectable()
export class AdminService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    ) { }

    // Dashboard Statistics
    async getDashboardStats() {
        const [totalUsers, totalOrders, orderStats] = await Promise.all([
            this.userModel.countDocuments(),
            this.orderModel.countDocuments(),
            this.orderModel.aggregate([
                {
                    $group: {
                        _id: null,
                        totalRevenue: { $sum: '$totalAmount' },
                        avgOrderValue: { $avg: '$totalAmount' },
                    },
                },
            ]),
        ]);

        const stats = orderStats[0] || { totalRevenue: 0, avgOrderValue: 0 };

        return {
            totalUsers,
            totalOrders,
            totalRevenue: stats.totalRevenue,
            avgOrderValue: stats.avgOrderValue,
        };
    }

    // Get recent orders
    async getRecentOrders(limit: number = 10) {
        return this.orderModel
            .find()
            .sort({ createdAt: -1 })
            .limit(limit)
            .populate('userId', 'firstName lastName email')
            .exec();
    }

    // Get sales chart data (last N days)
    async getSalesChartData(days: number = 7) {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);

        const salesData = await this.orderModel.aggregate([
            {
                $match: {
                    createdAt: { $gte: startDate },
                },
            },
            {
                $group: {
                    _id: {
                        $dateToString: { format: '%Y-%m-%d', date: '$createdAt' },
                    },
                    totalSales: { $sum: '$totalAmount' },
                    orderCount: { $sum: 1 },
                },
            },
            {
                $sort: { _id: 1 },
            },
        ]);

        return salesData;
    }

    // User Management
    async getAllUsers(page: number = 1, limit: number = 20) {
        const skip = (page - 1) * limit;

        const [users, total] = await Promise.all([
            this.userModel
                .find()
                .select('-password -refreshToken')
                .skip(skip)
                .limit(limit)
                .sort({ createdAt: -1 })
                .exec(),
            this.userModel.countDocuments(),
        ]);

        return {
            users,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        };
    }

    async getUserById(userId: string) {
        const user = await this.userModel
            .findById(userId)
            .select('-password -refreshToken')
            .exec();

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    }

    async updateUserRole(userId: string, role: 'customer' | 'admin') {
        const user = await this.userModel.findByIdAndUpdate(
            userId,
            { role },
            { new: true },
        ).select('-password -refreshToken');

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    }

    // Order Management
    async getAllOrders(page: number = 1, limit: number = 20, status?: string) {
        const skip = (page - 1) * limit;
        const filter = status ? { status } : {};

        const [orders, total] = await Promise.all([
            this.orderModel
                .find(filter)
                .populate('userId', 'firstName lastName email')
                .skip(skip)
                .limit(limit)
                .sort({ createdAt: -1 })
                .exec(),
            this.orderModel.countDocuments(filter),
        ]);

        return {
            orders,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        };
    }

    async getOrderById(orderId: string) {
        const order = await this.orderModel
            .findById(orderId)
            .populate('userId', 'firstName lastName email')
            .exec();

        if (!order) {
            throw new Error('Order not found');
        }

        return order;
    }

    async updateOrderStatus(
        orderId: string,
        status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled',
    ) {
        const order = await this.orderModel.findByIdAndUpdate(
            orderId,
            { status },
            { new: true },
        ).populate('userId', 'firstName lastName email');

        if (!order) {
            throw new Error('Order not found');
        }

        return order;
    }
}
