import { Injectable } from '@nestjs/common'
import { LoginAuthDto } from './dto/login-auth.dto'

@Injectable()
export class AuthService {
    login(createAuthDto: LoginAuthDto) {
        return 'This action adds a new auth'
    }
}
