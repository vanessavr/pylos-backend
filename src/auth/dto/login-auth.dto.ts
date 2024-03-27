import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class LoginAuthDto {
    @ApiProperty()
    @IsString()
    nombre: string

    @ApiProperty()
    @IsString()
    respuestaSeguridad: string
}
