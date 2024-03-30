import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsuarioModule } from './usuario/usuario.module'
import { PreguntaPruebaDiagnosticaModule } from './pregunta-prueba-diagnostica/pregunta-prueba-diagnostica.module'
import { OpcionPruebaDiagnosticaModule } from './opcion-prueba-diagnostica/opcion-prueba-diagnostica.module'
import { RespuestaPruebaDiagnosticaModule } from './respuesta-prueba-diagnostica/respuesta-prueba-diagnostica.module'
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma/prisma.module'
import { MascotaModule } from './mascota/mascota.module'

@Module({
    imports: [ConfigModule.forRoot(), UsuarioModule, PreguntaPruebaDiagnosticaModule, OpcionPruebaDiagnosticaModule, RespuestaPruebaDiagnosticaModule, AuthModule, PrismaModule, MascotaModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
