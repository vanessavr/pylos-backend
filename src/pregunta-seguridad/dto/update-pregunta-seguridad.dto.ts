import { PartialType } from '@nestjs/swagger';
import { CreatePreguntaSeguridadDto } from './create-pregunta-seguridad.dto';

export class UpdatePreguntaSeguridadDto extends PartialType(CreatePreguntaSeguridadDto) {}
