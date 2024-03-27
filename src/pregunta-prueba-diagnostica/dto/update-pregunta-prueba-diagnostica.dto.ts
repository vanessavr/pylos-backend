import { PartialType } from '@nestjs/swagger'
import { CreatePreguntaPruebaDiagnosticaDto } from './create-pregunta-prueba-diagnostica.dto'

export class UpdatePreguntaPruebaDiagnosticaDto extends PartialType(CreatePreguntaPruebaDiagnosticaDto) {}
