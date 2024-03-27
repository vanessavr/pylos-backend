import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { RespuestaPruebaDiagnosticaService } from './respuesta-prueba-diagnostica.service'
import { CreateRespuestaPruebaDiagnosticaDto } from './dto/create-respuesta-prueba-diagnostica.dto'
import { UpdateRespuestaPruebaDiagnosticaDto } from './dto/update-respuesta-prueba-diagnostica.dto'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { UseGuards } from '@nestjs/common/decorators'
import { AuthGuard } from 'src/auth/jwt-auth.guard'

@ApiTags('Respuesta de prueba diagnóstica')
@Controller('respuesta-prueba-diagnostica')
@ApiBearerAuth()
@UseGuards(AuthGuard)
export class RespuestaPruebaDiagnosticaController {
    constructor(private readonly respuestaPruebaDiagnosticaService: RespuestaPruebaDiagnosticaService) {}

    @Post()
    create(@Body() createRespuestaPruebaDiagnosticaDto: CreateRespuestaPruebaDiagnosticaDto) {
        return this.respuestaPruebaDiagnosticaService.create(createRespuestaPruebaDiagnosticaDto)
    }

    @Get()
    findAll() {
        return this.respuestaPruebaDiagnosticaService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.respuestaPruebaDiagnosticaService.findOne(id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateRespuestaPruebaDiagnosticaDto: UpdateRespuestaPruebaDiagnosticaDto) {
        return this.respuestaPruebaDiagnosticaService.update(id, updateRespuestaPruebaDiagnosticaDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.respuestaPruebaDiagnosticaService.remove(id)
    }
}
