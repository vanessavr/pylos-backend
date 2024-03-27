import { Test, TestingModule } from '@nestjs/testing';
import { PreguntaSeguridadController } from './pregunta-seguridad.controller';
import { PreguntaSeguridadService } from './pregunta-seguridad.service';

describe('PreguntaSeguridadController', () => {
  let controller: PreguntaSeguridadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreguntaSeguridadController],
      providers: [PreguntaSeguridadService],
    }).compile();

    controller = module.get<PreguntaSeguridadController>(PreguntaSeguridadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
