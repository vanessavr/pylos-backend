import { Test, TestingModule } from '@nestjs/testing';
import { RespuestaPruebaDiagnosticaController } from './respuesta-prueba-diagnostica.controller';
import { RespuestaPruebaDiagnosticaService } from './respuesta-prueba-diagnostica.service';

describe('RespuestaPruebaDiagnosticaController', () => {
  let controller: RespuestaPruebaDiagnosticaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RespuestaPruebaDiagnosticaController],
      providers: [RespuestaPruebaDiagnosticaService],
    }).compile();

    controller = module.get<RespuestaPruebaDiagnosticaController>(RespuestaPruebaDiagnosticaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
