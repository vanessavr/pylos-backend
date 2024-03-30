import { Module } from '@nestjs/common'
import { MascotaService } from './mascota.service'
import { MascotaController } from './mascota.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
    controllers: [MascotaController],
    providers: [MascotaService],
    imports: [PrismaModule],
})
export class MascotaModule {}
