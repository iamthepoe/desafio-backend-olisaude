import { Module } from '@nestjs/common';
import { HealthProblemsService } from './health-problems.service';
import { HealthProblemsController } from './health-problems.controller';

@Module({
  controllers: [HealthProblemsController],
  providers: [HealthProblemsService],
})
export class HealthProblemsModule {}
