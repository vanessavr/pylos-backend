import { PartialType } from '@nestjs/swagger';
import { CreateRespuestaPruebaDiagnosticaDto } from './create-respuesta-prueba-diagnostica.dto';

export class UpdateRespuestaPruebaDiagnosticaDto extends PartialType(CreateRespuestaPruebaDiagnosticaDto) {}
