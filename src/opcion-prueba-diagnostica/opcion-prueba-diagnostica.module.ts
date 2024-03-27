import { Module } from '@nestjs/common'
import { OpcionPruebaDiagnosticaService } from './opcion-prueba-diagnostica.service'
import { OpcionPruebaDiagnosticaController } from './opcion-prueba-diagnostica.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
    controllers: [OpcionPruebaDiagnosticaController],
    providers: [OpcionPruebaDiagnosticaService],
    imports: [PrismaModule],
})
export class OpcionPruebaDiagnosticaModule {}
