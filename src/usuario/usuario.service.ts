import { Injectable } from '@nestjs/common'
import { CreateUsuarioDto } from './dto/create-usuario.dto'
import { UpdateUsuarioDto } from './dto/update-usuario.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class UsuarioService {
    constructor(private prisma: PrismaService) {}

    create(createUsuarioDto: CreateUsuarioDto) {
        return this.prisma.usuario.create({
            data: createUsuarioDto,
        })
    }

    findAll() {
        return this.prisma.usuario.findMany()
    }

    findOne(id: string) {
        return this.prisma.usuario.findUnique({
            where: {
                id,
            },
        })
    }

    update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
        return this.prisma.usuario.update({
            where: {
                id,
            },
            data: updateUsuarioDto,
        })
    }

    remove(id: string) {
        return this.prisma.usuario.delete({
            where: {
                id,
            },
        })
    }
}
