import { PartialType } from '@nestjs/swagger'
import { CreateUsuarioDto } from 'src/usuario/dto/create-usuario.dto'

export class RegistroAuthDto extends PartialType(CreateUsuarioDto) {}
