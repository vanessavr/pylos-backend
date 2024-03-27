import { Test, TestingModule } from '@nestjs/testing';
import { PreguntaPruebaDiagnosticaController } from './pregunta-prueba-diagnostica.controller';
import { PreguntaPruebaDiagnosticaService } from './pregunta-prueba-diagnostica.service';

describe('PreguntaPruebaDiagnosticaController', () => {
  let controller: PreguntaPruebaDiagnosticaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreguntaPruebaDiagnosticaController],
      providers: [PreguntaPruebaDiagnosticaService],
    }).compile();

    controller = module.get<PreguntaPruebaDiagnosticaController>(PreguntaPruebaDiagnosticaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
