import { Injectable } from '@nestjs/common';
import { CreateHealthProblemDto } from './dto/create-health-problem.dto';
import { UpdateHealthProblemDto } from './dto/update-health-problem.dto';

@Injectable()
export class HealthProblemsService {
  create(createHealthProblemDto: CreateHealthProblemDto) {
    return 'This action adds a new healthProblem';
  }

  findAll() {
    return `This action returns all healthProblems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} healthProblem`;
  }

  update(id: number, updateHealthProblemDto: UpdateHealthProblemDto) {
    return `This action updates a #${id} healthProblem`;
  }

  remove(id: number) {
    return `This action removes a #${id} healthProblem`;
  }
}
