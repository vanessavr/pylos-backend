import { Injectable, Req, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { CreateUsuarioDto } from 'src/usuario/dto/create-usuario.dto'

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    async getUserFromToken(@Req() req: Request): Promise<CreateUsuarioDto> {
        const accessToken = req.headers['authorization'].split(' ')[1]

        if (!accessToken) {
            throw new UnauthorizedException('Token de acceso no proporcionado')
        }

        return this.getDataFromToken(accessToken)
    }

    async getDataFromToken(token: string): Promise<any> {
        try {
            const payload = this.jwtService.verify(token)

            delete payload.iat
            delete payload.exp

            // Aquí podrías consultar la base de datos u otro sistema de almacenamiento para obtener los datos del usuario
            // En este ejemplo, supondremos que el payload contiene directamente los datos del usuario
            return payload
        } catch (error) {
            throw new UnauthorizedException('Token inválido')
        }
    }
}
