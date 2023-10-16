import { Test, TestingModule } from '@nestjs/testing';
import { HealthProblemsController } from './health-problems.controller';
import { HealthProblemsService } from './health-problems.service';

describe('HealthProblemsController', () => {
  let controller: HealthProblemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthProblemsController],
      providers: [HealthProblemsService],
    }).compile();

    controller = module.get<HealthProblemsController>(HealthProblemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
