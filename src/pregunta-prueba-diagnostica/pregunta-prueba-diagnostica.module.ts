import { Module } from '@nestjs/common'
import { PreguntaPruebaDiagnosticaService } from './pregunta-prueba-diagnostica.service'
import { PreguntaPruebaDiagnosticaController } from './pregunta-prueba-diagnostica.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
    controllers: [PreguntaPruebaDiagnosticaController],
    providers: [PreguntaPruebaDiagnosticaService],
    imports: [PrismaModule],
})
export class PreguntaPruebaDiagnosticaModule {}
