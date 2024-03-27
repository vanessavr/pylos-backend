import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { PreguntaPruebaDiagnosticaService } from './pregunta-prueba-diagnostica.service'
import { CreatePreguntaPruebaDiagnosticaDto } from './dto/create-pregunta-prueba-diagnostica.dto'
import { UpdatePreguntaPruebaDiagnosticaDto } from './dto/update-pregunta-prueba-diagnostica.dto'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { UseGuards } from '@nestjs/common/decorators'
import { AuthGuard } from 'src/auth/jwt-auth.guard'

@ApiTags('Pregunta de prueba diagnóstica')
@Controller('pregunta-prueba-diagnostica')
@ApiBearerAuth()
@UseGuards(AuthGuard)
export class PreguntaPruebaDiagnosticaController {
    constructor(private readonly preguntaPruebaDiagnosticaService: PreguntaPruebaDiagnosticaService) {}

    @Post()
    create(@Body() createPreguntaPruebaDiagnosticaDto: CreatePreguntaPruebaDiagnosticaDto) {
        return this.preguntaPruebaDiagnosticaService.create(createPreguntaPruebaDiagnosticaDto)
    }

    @Get()
    findAll() {
        return this.preguntaPruebaDiagnosticaService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.preguntaPruebaDiagnosticaService.findOne(id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updatePreguntaPruebaDiagnosticaDto: UpdatePreguntaPruebaDiagnosticaDto) {
        return this.preguntaPruebaDiagnosticaService.update(id, updatePreguntaPruebaDiagnosticaDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.preguntaPruebaDiagnosticaService.remove(id)
    }
}
