import { Controller, Post, Body, Res } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginAuthDto } from './dto/login-auth.dto'
import { ApiTags } from '@nestjs/swagger'
import { UsuarioService } from 'src/usuario/usuario.service'
import { JwtService } from '@nestjs/jwt'
import { Response } from 'express'
import { PrismaService } from 'src/prisma/prisma.service'

interface ExtendedResponse extends Response {
    cookie(name: string, value: any, options?: any): any
    clearCookie(name: string, options?: any): any
}

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(
        private jwtService: JwtService,
        private readonly prisma: PrismaService,
    ) {}

    @Post('login')
    async login(@Res({ passthrough: true }) res: ExtendedResponse, @Body() loginAuthDto: LoginAuthDto) {
        const { nombre, respuestaSeguridad } = await loginAuthDto

        const findUser = await this.prisma.usuario.findFirst({ where: { nombre: nombre.toUpperCase(), respuestaSeguridad: respuestaSeguridad.toUpperCase() } })

        let payload = {}

        if (findUser) {
            payload = {
                id: findUser.id,
                nombre: findUser.nombre,
                edad: findUser.edad,
                grado: findUser.grado,
                colegio: findUser.colegio,
                preguntaSeguridadId: findUser.preguntaSeguridadId,
                respuestaSeguridad: findUser.respuestaSeguridad,
            }

            const token = this.jwtService.sign(payload)

            // Set the JWT token as a cookie in the response
            // res.cookie('accessToken', token, {
            //     domain: process.env.NEXTJS_PUBLIC_DOMAIN, // Use the correct frontend domain here
            //     sameSite: 'none',
            //     httpOnly: true,
            //     secure: true,
            // })

            return { user: findUser, token }
        }

        return null
    }

    @Post('logout')
    async logout(@Res({ passthrough: true }) res: ExtendedResponse) {
        // Eliminar la cookie que contiene el token de acceso
        res.clearCookie('accessToken')

        // Devolver una respuesta indicando que el logout fue exitoso
        return { message: 'Logout exitoso' }
    }
}
