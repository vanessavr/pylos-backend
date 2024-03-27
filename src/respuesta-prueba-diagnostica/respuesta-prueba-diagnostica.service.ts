import { Injectable } from '@nestjs/common'
import { CreateRespuestaPruebaDiagnosticaDto } from './dto/create-respuesta-prueba-diagnostica.dto'
import { UpdateRespuestaPruebaDiagnosticaDto } from './dto/update-respuesta-prueba-diagnostica.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class RespuestaPruebaDiagnosticaService {
    constructor(private prisma: PrismaService) {}

    create(createRespuestaPruebaDiagnosticaDto: CreateRespuestaPruebaDiagnosticaDto) {
        return this.prisma.respuestaPruebaDiagnostica.create({
            data: createRespuestaPruebaDiagnosticaDto,
        })
    }

    findAll() {
        return this.prisma.respuestaPruebaDiagnostica.findMany()
    }

    findOne(id: string) {
        return this.prisma.respuestaPruebaDiagnostica.findUnique({
            where: {
                id,
            },
        })
    }

    update(id: string, updateRespuestaPruebaDiagnosticaDto: UpdateRespuestaPruebaDiagnosticaDto) {
        return this.prisma.respuestaPruebaDiagnostica.update({
            where: {
                id,
            },
            data: updateRespuestaPruebaDiagnosticaDto,
        })
    }

    remove(id: string) {
        return this.prisma.respuestaPruebaDiagnostica.delete({
            where: {
                id,
            },
        })
    }
}
