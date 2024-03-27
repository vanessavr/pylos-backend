import { Injectable } from '@nestjs/common'
import { CreatePreguntaSeguridadDto } from './dto/create-pregunta-seguridad.dto'
import { UpdatePreguntaSeguridadDto } from './dto/update-pregunta-seguridad.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class PreguntaSeguridadService {
    constructor(private prisma: PrismaService) {}

    create(createPreguntaSeguridadDto: CreatePreguntaSeguridadDto) {
        return this.prisma.preguntaSeguridad.create({
            data: createPreguntaSeguridadDto,
        })
    }

    findAll() {
        return this.prisma.preguntaSeguridad.findMany()
    }

    findOne(id: string) {
        return this.prisma.preguntaSeguridad.findUnique({
            where: {
                id,
            },
        })
    }

    update(id: string, updatePreguntaSeguridadDto: UpdatePreguntaSeguridadDto) {
        return this.prisma.preguntaSeguridad.update({
            where: {
                id,
            },
            data: updatePreguntaSeguridadDto,
        })
    }

    remove(id: string) {
        return this.prisma.preguntaSeguridad.delete({
            where: {
                id,
            },
        })
    }
}
