import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateUsuarioDto {
    id: string

    @ApiProperty()
    @IsNotEmpty()
    nombre: string

    @ApiProperty()
    @IsNotEmpty()
    edad: number

    @ApiProperty()
    @IsNotEmpty()
    grado: string

    @ApiProperty()
    @IsNotEmpty()
    colegio: string

    @ApiProperty()
    @IsNotEmpty()
    preguntaSeguridadId: string

    @ApiProperty()
    @IsNotEmpty()
    respuestaSeguridad: string
}
