import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class LoginAuthDto {
    @ApiProperty()
    @IsString()
    nombreUsuario: string

    @ApiProperty()
    @IsString()
    mascotaNombre: string
}
