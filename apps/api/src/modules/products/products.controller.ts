
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { AdminAuthGuard } from '../auth/guards/admin-auth.guard';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    // Public endpoints
    @Get()
    findAll(@Query() query: any) {
        return this.productsService.findAll(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productsService.findOne(id);
    }

    // Admin protected endpoints
    @Post()
    @UseGuards(AdminAuthGuard)
    create(@Body() createProductDto: any) {
        return this.productsService.create(createProductDto);
    }

    @Patch(':id')
    @UseGuards(AdminAuthGuard)
    update(@Param('id') id: string, @Body() updateProductDto: any) {
        return this.productsService.update(id, updateProductDto);
    }

    @Delete(':id')
    @UseGuards(AdminAuthGuard)
    remove(@Param('id') id: string) {
        return this.productsService.remove(id);
    }
}
