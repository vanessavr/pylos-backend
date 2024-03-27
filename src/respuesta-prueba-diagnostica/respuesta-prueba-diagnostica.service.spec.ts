import { Test, TestingModule } from '@nestjs/testing';
import { RespuestaPruebaDiagnosticaService } from './respuesta-prueba-diagnostica.service';

describe('RespuestaPruebaDiagnosticaService', () => {
  let service: RespuestaPruebaDiagnosticaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RespuestaPruebaDiagnosticaService],
    }).compile();

    service = module.get<RespuestaPruebaDiagnosticaService>(RespuestaPruebaDiagnosticaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
