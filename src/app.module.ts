import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsuarioModule } from './usuario/usuario.module'
import { PreguntaPruebaDiagnosticaModule } from './pregunta-prueba-diagnostica/pregunta-prueba-diagnostica.module'
import { OpcionPruebaDiagnosticaModule } from './opcion-prueba-diagnostica/opcion-prueba-diagnostica.module'
import { RespuestaPruebaDiagnosticaModule } from './respuesta-prueba-diagnostica/respuesta-prueba-diagnostica.module'
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma/prisma.module'
import { MascotaModule } from './mascota/mascota.module'
import * as path from 'path'
import { I18nModule, AcceptLanguageResolver, QueryResolver, HeaderResolver } from 'nestjs-i18n'

@Module({
    imports: [
        I18nModule.forRoot({
            fallbackLanguage: 'es',
            loaderOptions: {
                path: path.join(__dirname, '/i18n/'),
                watch: true,
            },
            resolvers: [{ use: QueryResolver, options: ['lang', 'locale', 'l'] }, AcceptLanguageResolver],
        }),
        ConfigModule.forRoot(),
        UsuarioModule,
        PreguntaPruebaDiagnosticaModule,
        OpcionPruebaDiagnosticaModule,
        RespuestaPruebaDiagnosticaModule,
        AuthModule,
        PrismaModule,
        MascotaModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
