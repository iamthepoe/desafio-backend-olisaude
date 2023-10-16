import { Module } from '@nestjs/common';
import { HealthProblemsService } from './health-problems.service';
import { HealthProblemsController } from './health-problems.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [HealthProblemsController],
  providers: [HealthProblemsService, PrismaService],
})
export class HealthProblemsModule { }
