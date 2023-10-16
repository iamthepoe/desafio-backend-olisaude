import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHealthProblemDto } from './dto/create-health-problem.dto';
import { UpdateHealthProblemDto } from './dto/update-health-problem.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class HealthProblemsService {
  constructor(private readonly prisma: PrismaService) { }

  create(data: CreateHealthProblemDto) {
    return this.prisma.healthProblem.create({ data });
  }

  findAll() {
    return this.prisma.healthProblem.findMany();
  }

  async findOne(id: string) {
    const healthProblem = await this.prisma.healthProblem.findFirst({ where: { id } });
    if (!healthProblem) throw new NotFoundException('Health Problem not found.');
    return healthProblem;
  }

  async update(id: string, data: UpdateHealthProblemDto) {
    const healthProblem = await this.prisma.healthProblem.findFirst({ where: { id } });
    if (!healthProblem) throw new NotFoundException('Health Problem not found.');
    return this.prisma.healthProblem.update({ where: { id }, data });
  }

  async remove(id: string) {
    const healthProblem = await this.prisma.healthProblem.findFirst({ where: { id } });
    if (!healthProblem) throw new NotFoundException('Health Problem not found.');
    this.prisma.healthProblem.delete({ where: { id } });
  }
}
