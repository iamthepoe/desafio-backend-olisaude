import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HealthProblemsService } from './health-problems.service';
import { CreateHealthProblemDto } from './dto/create-health-problem.dto';
import { UpdateHealthProblemDto } from './dto/update-health-problem.dto';

@Controller('health-problems')
export class HealthProblemsController {
  constructor(private readonly healthProblemsService: HealthProblemsService) {}

  @Post()
  create(@Body() createHealthProblemDto: CreateHealthProblemDto) {
    return this.healthProblemsService.create(createHealthProblemDto);
  }

  @Get()
  findAll() {
    return this.healthProblemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.healthProblemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHealthProblemDto: UpdateHealthProblemDto) {
    return this.healthProblemsService.update(+id, updateHealthProblemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.healthProblemsService.remove(+id);
  }
}
