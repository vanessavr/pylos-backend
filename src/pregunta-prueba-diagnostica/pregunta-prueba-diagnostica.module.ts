import { Module } from '@nestjs/common'
import { PreguntaPruebaDiagnosticaService } from './pregunta-prueba-diagnostica.service'
import { PreguntaPruebaDiagnosticaController } from './pregunta-prueba-diagnostica.controller'
import { PrismaModule } from 'src/prisma/prisma.module'
import { AuthService } from 'src/auth/auth.service'

@Module({
    controllers: [PreguntaPruebaDiagnosticaController],
    providers: [PreguntaPruebaDiagnosticaService, AuthService],
    imports: [PrismaModule],
})
export class PreguntaPruebaDiagnosticaModule {}
