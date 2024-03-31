import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateRespuestaPruebaDiagnosticaDto {
    id: string

    @ApiProperty()
    respuesta: string

    @ApiProperty()
    // @IsNotEmpty()
    usuarioId: string

    @ApiProperty()
    @IsNotEmpty()
    opcionPruebaDiagnosticaId: string
}
