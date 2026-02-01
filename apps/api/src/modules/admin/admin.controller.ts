import {
    Controller,
    Get,
    Patch,
    Param,
    Body,
    Query,
    UseGuards,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminAuthGuard } from '../auth/guards/admin-auth.guard';

@Controller('admin')
@UseGuards(AdminAuthGuard)
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    // Dashboard
    @Get('stats')
    async getDashboardStats() {
        return this.adminService.getDashboardStats();
    }

    @Get('recent-orders')
    async getRecentOrders(@Query('limit') limit?: string) {
        const limitNum = limit ? parseInt(limit, 10) : 10;
        return this.adminService.getRecentOrders(limitNum);
    }

    @Get('sales-chart')
    async getSalesChart(@Query('days') days?: string) {
        const daysNum = days ? parseInt(days, 10) : 7;
        return this.adminService.getSalesChartData(daysNum);
    }

    // User Management
    @Get('users')
    async getAllUsers(
        @Query('page') page?: string,
        @Query('limit') limit?: string,
    ) {
        const pageNum = page ? parseInt(page, 10) : 1;
        const limitNum = limit ? parseInt(limit, 10) : 20;
        return this.adminService.getAllUsers(pageNum, limitNum);
    }

    @Get('users/:id')
    async getUserById(@Param('id') id: string) {
        return this.adminService.getUserById(id);
    }

    @Patch('users/:id/role')
    async updateUserRole(
        @Param('id') id: string,
        @Body('role') role: 'customer' | 'admin',
    ) {
        return this.adminService.updateUserRole(id, role);
    }

    // Order Management
    @Get('orders')
    async getAllOrders(
        @Query('page') page?: string,
        @Query('limit') limit?: string,
        @Query('status') status?: string,
    ) {
        const pageNum = page ? parseInt(page, 10) : 1;
        const limitNum = limit ? parseInt(limit, 10) : 20;
        return this.adminService.getAllOrders(pageNum, limitNum, status);
    }

    @Get('orders/:id')
    async getOrderById(@Param('id') id: string) {
        return this.adminService.getOrderById(id);
    }

    @Patch('orders/:id/status')
    async updateOrderStatus(
        @Param('id') id: string,
        @Body('status') status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled',
    ) {
        return this.adminService.updateOrderStatus(id, status);
    }
}
