import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { HealthProblemsModule } from './health-problems/health-problems.module';

@Module({
  imports: [CustomersModule, HealthProblemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
