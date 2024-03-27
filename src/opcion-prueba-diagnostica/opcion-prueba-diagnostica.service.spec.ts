import { Test, TestingModule } from '@nestjs/testing'
import { OpcionPruebaDiagnosticaService } from './opcion-prueba-diagnostica.service'

describe('OpcionPruebaDiagnosticaService', () => {
    let service: OpcionPruebaDiagnosticaService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [OpcionPruebaDiagnosticaService],
        }).compile()

        service = module.get<OpcionPruebaDiagnosticaService>(OpcionPruebaDiagnosticaService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
