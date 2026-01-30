import { Controller, Post, Body, Put, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateProfileDto, ChangePasswordDto, ForgotPasswordDto, ResetPasswordDto } from './dto/update-profile.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('register/initiate')
    async initiateRegistration(@Body() registerDto: RegisterDto) {
        return this.authService.initiateRegistration(registerDto);
    }

    @Post('register/verify')
    async verifyOTPAndRegister(@Body() body: { email: string; otp: string }) {
        return this.authService.verifyOTPAndRegister(body.email, body.otp);
    }

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }

    @Put('profile')
    async updateProfile(@Body() body: UpdateProfileDto & { userId: string }) {
        return this.authService.updateProfile(body.userId, {
            firstName: body.firstName,
            lastName: body.lastName,
        });
    }

    @Post('change-password')
    async changePassword(@Body() body: ChangePasswordDto & { userId: string }) {
        return this.authService.changePassword(body.userId, body.currentPassword, body.newPassword);
    }

    @Post('forgot-password')
    async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
        return this.authService.initiateForgotPassword(forgotPasswordDto.email);
    }

    @Post('reset-password')
    async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
        return this.authService.resetPassword(
            resetPasswordDto.email,
            resetPasswordDto.otp,
            resetPasswordDto.newPassword
        );
    }
}
