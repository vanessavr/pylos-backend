import { Test, TestingModule } from '@nestjs/testing'
import { PreguntaPruebaDiagnosticaService } from './pregunta-prueba-diagnostica.service'

describe('PreguntaPruebaDiagnosticaService', () => {
    let service: PreguntaPruebaDiagnosticaService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PreguntaPruebaDiagnosticaService],
        }).compile()

        service = module.get<PreguntaPruebaDiagnosticaService>(PreguntaPruebaDiagnosticaService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
