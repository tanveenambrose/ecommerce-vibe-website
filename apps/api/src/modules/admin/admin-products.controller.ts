import { Controller, Get, Post, Put, Delete, Patch, Body, Param, UseGuards, Query } from '@nestjs/common';
import { AdminAuthGuard } from '../auth/guards/admin-auth.guard';
import { ProductsService } from '../products/products.service';

import { Product } from '../products/product.schema';


@Controller('admin/products')
@UseGuards(AdminAuthGuard)
export class AdminProductsController {
    constructor(private readonly productsService: ProductsService) { }

    // Get all products for admin with pagination
    @Get()
    async getAllProducts(
        @Query('page') page?: string,
        @Query('limit') limit?: string,
        @Query('category') category?: string,
    ) {
        const query: any = {};
        if (category) {
            query.category = { $regex: category, $options: 'i' };
        }
        return this.productsService.findAll(query);
    }

    // Update product (ADMIN ONLY)
    @Put(':id')
    async updateProduct(
        @Param('id') id: string,
        @Body() updateData: Partial<Product>,
    ) {
        return this.productsService.update(id, updateData);
    }

    // Delete product (ADMIN ONLY)
    @Delete(':id')
    async deleteProduct(@Param('id') id: string) {
        return this.productsService.remove(id);
    }

    // Create new product (ADMIN ONLY)
    @Post()
    async createProduct(@Body() productData: Product) {
        return this.productsService.create(productData);
    }

    // Toggle stock status (ADMIN ONLY)
    @Patch(':id/stock')
    async toggleStock(
        @Param('id') id: string,
        @Body('inStock') inStock: boolean,
    ) {
        return this.productsService.updateStock(id);
    }

    // Bulk update products (ADMIN ONLY)
    @Post('bulk-update')
    async bulkUpdateProducts(@Body() data: { productIds: string[]; updates: Partial<Product> }) {
        const results = await Promise.all(
            data.productIds.map(id => this.productsService.update(id, data.updates))
        );
        return {
            message: 'Bulk update successful',
            affectedProducts: results.length,
            updates: data.updates,
        };
    }

    // Bulk delete products (ADMIN ONLY)
    @Post('bulk-delete')
    async bulkDeleteProducts(@Body() data: { productIds: string[] }) {
        const results = await Promise.all(
            data.productIds.map(id => this.productsService.remove(id))
        );
        return {
            message: 'Bulk delete successful',
            deletedCount: results.length,
        };
    }
}
