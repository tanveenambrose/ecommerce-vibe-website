
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    category: string;

    @Prop({ required: true })
    subcategory: string;

    @Prop([String])
    images: string[];

    @Prop({ default: 0 })
    stock: number;

    @Prop({ default: true })
    inStock: boolean;

    @Prop({ default: false })
    featured: boolean;

    @Prop()
    brand: string;

    @Prop({ type: Object })
    specs: Record<string, string>;

    @Prop({ default: 0 })
    rating: number;

    @Prop({ default: 0 })
    reviewCount: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
ProductSchema.index({ name: 'text', description: 'text', category: 'text' });
