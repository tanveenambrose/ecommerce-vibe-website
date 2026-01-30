import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OTPDocument = OTP & Document;

@Schema({ timestamps: true })
export class OTP {
    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    otp: string;

    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true })
    password: string;

    @Prop({ default: Date.now, expires: 600 }) // Auto-delete after 10 minutes
    createdAt: Date;
}

export const OTPSchema = SchemaFactory.createForClass(OTP);
