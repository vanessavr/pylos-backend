import { Injectable } from '@nestjs/common'
import { CreateMascotaDto } from './dto/create-mascota.dto'
import { UpdateMascotaDto } from './dto/update-mascota.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class MascotaService {
    constructor(private prisma: PrismaService) {}

    create(createMascotaDto: CreateMascotaDto) {
        return this.prisma.mascota.create({
            data: createMascotaDto,
        })
    }

    findAll() {
        return this.prisma.mascota.findMany()
    }

    findOne(id: string) {
        return this.prisma.mascota.findUnique({
            where: {
                id,
            },
        })
    }

    update(id: string, updateMascotaDto: UpdateMascotaDto) {
        return this.prisma.mascota.update({
            where: {
                id,
            },
            data: updateMascotaDto,
        })
    }

    remove(id: string) {
        return this.prisma.mascota.delete({
            where: {
                id,
            },
        })
    }
}
