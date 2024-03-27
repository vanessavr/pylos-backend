import { PartialType } from '@nestjs/swagger';
import { CreateOpcionPruebaDiagnosticaDto } from './create-opcion-prueba-diagnostica.dto';

export class UpdateOpcionPruebaDiagnosticaDto extends PartialType(CreateOpcionPruebaDiagnosticaDto) {}
