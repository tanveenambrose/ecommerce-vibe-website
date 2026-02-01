import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { JwtAuthGuard } from '../jwt-auth.guard';

@Injectable()
export class AdminAuthGuard extends JwtAuthGuard {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        // First check if user is authenticated
        const isAuthenticated = await super.canActivate(context);

        if (!isAuthenticated) {
            return false;
        }

        // Then check if user has admin role
        const request = context.switchToHttp().getRequest();
        const user = request.user;

        if (!user || user.role !== 'admin') {
            throw new ForbiddenException('Access denied. Admin privileges required.');
        }

        return true;
    }
}
