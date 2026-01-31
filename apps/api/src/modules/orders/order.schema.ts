import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrderDocument = Order & Document;

export enum OrderStatus {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    PROCESSING = 'processing',
    SHIPPED = 'shipped',
    DELIVERED = 'delivered',
    CANCELLED = 'cancelled',
}

export enum PaymentMethod {
    CARD = 'card',
    PAYPAL = 'paypal',
    COD = 'cod',
}

@Schema()
export class OrderItem {
    @Prop({ required: true })
    productId: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    quantity: number;

    @Prop()
    image: string;
}

@Schema()
export class ShippingAddress {
    @Prop({ required: true })
    fullName: string;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    city: string;

    @Prop({ required: true })
    postalCode: string;

    @Prop({ required: true })
    country: string;

    @Prop()
    phone: string;
}

@Schema({ timestamps: true })
export class Order {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    userId: Types.ObjectId;

    @Prop({ required: true })
    orderNumber: string;

    @Prop({ type: [OrderItem], required: true })
    items: OrderItem[];

    @Prop({ required: true })
    subtotal: number;

    @Prop({ required: true })
    tax: number;

    @Prop({ required: true })
    shipping: number;

    @Prop({ required: true })
    total: number;

    @Prop({ type: ShippingAddress, required: true })
    shippingAddress: ShippingAddress;

    @Prop({ enum: PaymentMethod, required: true })
    paymentMethod: PaymentMethod;

    @Prop({ enum: OrderStatus, default: OrderStatus.PENDING })
    status: OrderStatus;

    @Prop()
    trackingNumber: string;

    @Prop()
    estimatedDelivery: Date;

    @Prop()
    deliveredAt: Date;

    @Prop()
    notes: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
