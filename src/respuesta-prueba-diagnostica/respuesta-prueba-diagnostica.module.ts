import { Module } from '@nestjs/common'
import { RespuestaPruebaDiagnosticaService } from './respuesta-prueba-diagnostica.service'
import { RespuestaPruebaDiagnosticaController } from './respuesta-prueba-diagnostica.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
    controllers: [RespuestaPruebaDiagnosticaController],
    providers: [RespuestaPruebaDiagnosticaService],
    imports: [PrismaModule],
})
export class RespuestaPruebaDiagnosticaModule {}
