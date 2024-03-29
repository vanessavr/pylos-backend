import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common'
import { CanActivate } from '@nestjs/common/interfaces/features/can-activate.interface'
import { Request, Response } from 'express' // Ensure correct import from Express
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest<Request>()
        const response = context.switchToHttp().getResponse<Response>()
        const token = this.extractTokenFromHeader(request)

        if (!token) {
            throw new UnauthorizedException()
        }

        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: process.env.JWT_SECRET,
            })

            // Set cookie with correct frontend domain
            const cookieOptions = {
                domain: process.env.NEXTJS_PUBLIC_URL, // Use the correct frontend domain here
                httpOnly: true,
                // Other cookie options like maxAge, secure, etc.
            }

            response.cookie('accessToken', token, cookieOptions)

            // 💡 We're assigning the payload to the request object here
            // so that we can access it in our route handlers
            request['user'] = payload
        } catch {
            throw new UnauthorizedException()
        }

        return true
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? []
        return type === 'Bearer' ? token : undefined
    }
}
