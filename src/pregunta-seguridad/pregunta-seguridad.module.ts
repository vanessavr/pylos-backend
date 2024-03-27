import { Module } from '@nestjs/common'
import { PreguntaSeguridadService } from './pregunta-seguridad.service'
import { PreguntaSeguridadController } from './pregunta-seguridad.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
    controllers: [PreguntaSeguridadController],
    providers: [PreguntaSeguridadService],
    imports: [PrismaModule],
})
export class PreguntaSeguridadModule {}
