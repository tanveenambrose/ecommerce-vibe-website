import { Injectable, UnauthorizedException, BadRequestException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersService } from '../users/users.service';
import { EmailService } from '../email/email.service';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { OTP, OTPDocument } from './otp.schema';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private emailService: EmailService,
        private cloudinaryService: CloudinaryService,
        @InjectModel(OTP.name) private otpModel: Model<OTPDocument>,
    ) { }

    async initiateRegistration(registerDto: RegisterDto) {
        // Check if user already exists
        const existingUser = await this.usersService.findByEmail(registerDto.email);
        if (existingUser) {
            throw new ConflictException('User with this email already exists');
        }

        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        // Store OTP and user data temporarily (expires in 10 minutes)
        await this.otpModel.deleteMany({ email: registerDto.email }); // Remove any existing OTP for this email
        await this.otpModel.create({
            email: registerDto.email,
            otp,
            firstName: registerDto.firstName,
            lastName: registerDto.lastName,
            password: registerDto.password,
        });

        // Send OTP email
        await this.emailService.sendOTPEmail(registerDto.email, otp, registerDto.firstName);

        return {
            message: 'OTP sent to your email. Please verify to complete registration.',
            email: registerDto.email,
        };
    }

    async verifyOTPAndRegister(email: string, otp: string) {
        const otpRecord = await this.otpModel.findOne({ email, otp });

        if (!otpRecord) {
            throw new BadRequestException('Invalid or expired OTP');
        }

        // Create the user
        const user = await this.usersService.create({
            email: otpRecord.email,
            password: otpRecord.password,
            firstName: otpRecord.firstName,
            lastName: otpRecord.lastName,
        });

        // Delete the OTP record
        await this.otpModel.deleteOne({ _id: otpRecord._id });

        // Generate JWT token
        const payload = {
            sub: user['_id'].toString(),
            email: user.email,
            role: user.role,
        };

        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user['_id'].toString(),
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                profilePicture: user.profilePicture,
            },
        };
    }

    async login(loginDto: LoginDto) {
        const user = await this.usersService.findByEmail(loginDto.email);

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const isPasswordValid = await user.comparePassword(loginDto.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload = {
            sub: user['_id'].toString(),
            email: user.email,
            role: user.role,
        };

        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user['_id'].toString(),
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                profilePicture: user.profilePicture,
            },
        };
    }

    async validateUser(userId: string) {
        const user = await this.usersService.findById(userId);
        if (!user) {
            throw new UnauthorizedException('User not found');
        }
        return user;
    }

    async updateProfile(userId: string, updateData: { firstName: string; lastName: string }) {
        const updatedUser = await this.usersService.updateProfile(userId, updateData);
        if (!updatedUser) {
            throw new BadRequestException('Failed to update profile');
        }
        return {
            user: {
                id: updatedUser['_id'].toString(),
                email: updatedUser.email,
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
                role: updatedUser.role,
            },
        };
    }

    async changePassword(userId: string, currentPassword: string, newPassword: string) {
        const user = await this.usersService.findById(userId);
        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        const isPasswordValid = await user.comparePassword(currentPassword);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Current password is incorrect');
        }

        await this.usersService.updatePassword(userId, newPassword);
        return { message: 'Password changed successfully' };
    }

    async initiateForgotPassword(email: string) {
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            // Don't reveal if email exists for security
            return { message: 'If the email exists, an OTP has been sent.' };
        }

        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        // Store OTP (reusing OTP model)
        await this.otpModel.deleteMany({ email });
        await this.otpModel.create({
            email,
            otp,
            firstName: user.firstName,
            lastName: user.lastName,
            password: '', // Not used for password reset
        });

        // Send password reset email
        await this.emailService.sendPasswordResetEmail(email, otp, user.firstName);

        return { message: 'If the email exists, an OTP has been sent.', email };
    }

    async resetPassword(email: string, otp: string, newPassword: string) {
        const otpRecord = await this.otpModel.findOne({ email, otp });

        if (!otpRecord) {
            throw new BadRequestException('Invalid or expired OTP');
        }

        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new BadRequestException('User not found');
        }

        // Update password
        await this.usersService.updatePassword(user['_id'].toString(), newPassword);

        // Delete OTP record
        await this.otpModel.deleteOne({ _id: otpRecord._id });

        return { message: 'Password reset successfully. Please login with your new password.' };
    }

    async uploadProfilePicture(userId: string, file: Express.Multer.File) {
        const result = await this.cloudinaryService.uploadImage(file);
        const updatedUser = await this.usersService.updateProfilePicture(userId, result.secure_url);

        if (!updatedUser) {
            throw new BadRequestException('Failed to update profile picture');
        }

        return {
            message: 'Profile picture updated successfully',
            profilePicture: updatedUser.profilePicture,
            user: {
                id: updatedUser['_id'].toString(),
                email: updatedUser.email,
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
                role: updatedUser.role,
                profilePicture: updatedUser.profilePicture,
            }
        };
    }
}
