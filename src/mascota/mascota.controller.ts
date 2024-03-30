import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common'
import { MascotaService } from './mascota.service'
import { CreateMascotaDto } from './dto/create-mascota.dto'
import { UpdateMascotaDto } from './dto/update-mascota.dto'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AuthGuard } from 'src/auth/jwt-auth.guard'

@ApiTags('Mascota')
@Controller('mascota')
export class MascotaController {
    constructor(private readonly mascotaService: MascotaService) {}

    @Post()
    create(@Body() createMascotaDto: CreateMascotaDto) {
        return this.mascotaService.create(createMascotaDto)
    }

    @Get()
    findAll() {
        return this.mascotaService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.mascotaService.findOne(id)
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateMascotaDto: UpdateMascotaDto) {
        return this.mascotaService.update(id, updateMascotaDto)
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.mascotaService.remove(id)
    }
}
