import { Test, TestingModule } from '@nestjs/testing';
import { PreguntaSeguridadService } from './pregunta-seguridad.service';

describe('PreguntaSeguridadService', () => {
  let service: PreguntaSeguridadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreguntaSeguridadService],
    }).compile();

    service = module.get<PreguntaSeguridadService>(PreguntaSeguridadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
