import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { PreguntaSeguridadService } from './pregunta-seguridad.service'
import { CreatePreguntaSeguridadDto } from './dto/create-pregunta-seguridad.dto'
import { UpdatePreguntaSeguridadDto } from './dto/update-pregunta-seguridad.dto'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { UseGuards } from '@nestjs/common/decorators'
import { AuthGuard } from 'src/auth/jwt-auth.guard'

@ApiTags('Pregunta de seguridad')
@Controller('pregunta-seguridad')
// @ApiBearerAuth()
// @UseGuards(AuthGuard)
export class PreguntaSeguridadController {
    constructor(private readonly preguntaSeguridadService: PreguntaSeguridadService) {}

    @Post()
    create(@Body() createPreguntaSeguridadDto: CreatePreguntaSeguridadDto) {
        return this.preguntaSeguridadService.create(createPreguntaSeguridadDto)
    }

    @Get()
    findAll() {
        return this.preguntaSeguridadService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.preguntaSeguridadService.findOne(id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updatePreguntaSeguridadDto: UpdatePreguntaSeguridadDto) {
        return this.preguntaSeguridadService.update(id, updatePreguntaSeguridadDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.preguntaSeguridadService.remove(id)
    }
}
