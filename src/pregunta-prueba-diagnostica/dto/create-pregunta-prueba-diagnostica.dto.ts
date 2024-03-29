import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreatePreguntaPruebaDiagnosticaDto {
    id: string

    @ApiProperty()
    @IsNotEmpty()
    pregunta: string

    @ApiProperty()
    @IsNotEmpty()
    esPreguntaCerrada: boolean
}
