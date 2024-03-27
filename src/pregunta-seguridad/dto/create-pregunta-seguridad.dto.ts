import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreatePreguntaSeguridadDto {
    id: string

    @ApiProperty()
    @IsNotEmpty()
    pregunta: string
}
