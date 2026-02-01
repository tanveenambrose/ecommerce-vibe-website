
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.schema';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    ) { }

    async create(createProductDto: any): Promise<Product> {
        const createdProduct = new this.productModel(createProductDto);
        return createdProduct.save();
    }

    async findAll(query: any = {}): Promise<Product[]> {
        return this.productModel.find(query).exec();
    }

    async findOne(id: string): Promise<ProductDocument> {
        const product = await this.productModel.findById(id).exec();
        if (!product) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
    }

    async update(id: string, updateProductDto: any): Promise<Product> {
        const updatedProduct = await this.productModel
            .findByIdAndUpdate(id, updateProductDto, { new: true })
            .exec();
        if (!updatedProduct) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return updatedProduct;
    }

    async remove(id: string): Promise<Product> {
        const deletedProduct = await this.productModel.findByIdAndDelete(id).exec();
        if (!deletedProduct) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return deletedProduct;
    }

    async updateStock(id: string, customStock?: number): Promise<Product> {
        // If customStock is provided, set it directly. Otherwise toggle inStock.
        // This logic supports both specificity and a simple toggle if needed.
        const product = await this.findOne(id);

        if (customStock !== undefined) {
            product.stock = customStock;
            product.inStock = customStock > 0;
        } else {
            // Simple toggle logic if no specific stock provided (fallback behavior)
            product.inStock = !product.inStock;
        }

        return product.save();
    }
}
