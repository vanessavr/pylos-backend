import { Injectable } from '@nestjs/common'
import { CreateOpcionPruebaDiagnosticaDto } from './dto/create-opcion-prueba-diagnostica.dto'
import { UpdateOpcionPruebaDiagnosticaDto } from './dto/update-opcion-prueba-diagnostica.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class OpcionPruebaDiagnosticaService {
    constructor(private prisma: PrismaService) {}

    create(createOpcionPruebaDiagnosticaDto: CreateOpcionPruebaDiagnosticaDto) {
        return this.prisma.opcionPruebaDiagnostica.create({
            data: createOpcionPruebaDiagnosticaDto,
        })
    }

    findAll() {
        return this.prisma.opcionPruebaDiagnostica.findMany()
    }

    findOne(id: string) {
        return this.prisma.opcionPruebaDiagnostica.findUnique({
            where: {
                id,
            },
        })
    }

    update(id: string, updateOpcionPruebaDiagnosticaDto: UpdateOpcionPruebaDiagnosticaDto) {
        return this.prisma.opcionPruebaDiagnostica.update({
            where: {
                id,
            },
            data: updateOpcionPruebaDiagnosticaDto,
        })
    }

    remove(id: string) {
        return this.prisma.opcionPruebaDiagnostica.delete({
            where: {
                id,
            },
        })
    }
}
