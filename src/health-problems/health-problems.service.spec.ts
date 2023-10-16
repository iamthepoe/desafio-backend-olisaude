import { Test, TestingModule } from '@nestjs/testing';
import { HealthProblemsService } from './health-problems.service';

describe('HealthProblemsService', () => {
  let service: HealthProblemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthProblemsService],
    }).compile();

    service = module.get<HealthProblemsService>(HealthProblemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
