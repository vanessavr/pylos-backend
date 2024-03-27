import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateOpcionPruebaDiagnosticaDto {
    id: string

    @ApiProperty()
    @IsNotEmpty()
    opcion: string

    @ApiProperty()
    @IsNotEmpty()
    preguntaPruebaDiagnosticaId: string

    @ApiProperty()
    @IsNotEmpty()
    esOpcionCorrecta: boolean
}
