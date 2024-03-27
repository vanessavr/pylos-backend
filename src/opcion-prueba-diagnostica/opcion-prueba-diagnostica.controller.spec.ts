import { Test, TestingModule } from '@nestjs/testing'
import { OpcionPruebaDiagnosticaController } from './opcion-prueba-diagnostica.controller'
import { OpcionPruebaDiagnosticaService } from './opcion-prueba-diagnostica.service'

describe('OpcionPruebaDiagnosticaController', () => {
    let controller: OpcionPruebaDiagnosticaController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [OpcionPruebaDiagnosticaController],
            providers: [OpcionPruebaDiagnosticaService],
        }).compile()

        controller = module.get<OpcionPruebaDiagnosticaController>(OpcionPruebaDiagnosticaController)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })
})
