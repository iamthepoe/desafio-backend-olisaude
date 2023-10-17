import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { PrismaService } from '../database/prisma.service';
import { HealthProblemsModule } from 'src/health-problems/health-problems.module';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService, PrismaService],
  imports: [HealthProblemsModule]
})
export class CustomersModule { }
