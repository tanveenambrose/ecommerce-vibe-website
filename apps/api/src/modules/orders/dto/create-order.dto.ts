import { IsNotEmpty, IsString, IsNumber, IsArray, IsEnum, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PaymentMethod } from '../order.schema';

export class CreateOrderItemDto {
    @IsString()
    @IsNotEmpty()
    productId: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    @IsString()
    @IsOptional()
    image?: string;
}

export class CreateShippingAddressDto {
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    postalCode: string;

    @IsString()
    @IsNotEmpty()
    country: string;

    @IsString()
    @IsOptional()
    phone?: string;
}

export class CreateOrderDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateOrderItemDto)
    items: CreateOrderItemDto[];

    @IsNumber()
    @IsNotEmpty()
    subtotal: number;

    @IsNumber()
    @IsNotEmpty()
    tax: number;

    @IsNumber()
    @IsNotEmpty()
    shipping: number;

    @IsNumber()
    @IsNotEmpty()
    total: number;

    @ValidateNested()
    @Type(() => CreateShippingAddressDto)
    shippingAddress: CreateShippingAddressDto;

    @IsEnum(PaymentMethod)
    @IsNotEmpty()
    paymentMethod: PaymentMethod;

    @IsString()
    @IsOptional()
    notes?: string;
}
