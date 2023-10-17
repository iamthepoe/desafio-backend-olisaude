import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from '../database/prisma.service';
import { HealthProblemsService } from 'src/health-problems/health-problems.service';

@Injectable()
export class CustomersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly healthProblemsService: HealthProblemsService
  ) { }

  async create(data: CreateCustomerDto) {
    const healthProblemsIds = data.healthProblems.map(id => { return { id } });

    if (!['M', 'F'].includes(data.sex))
      throw new BadRequestException('Sex should be M or F');


    const healthProblems = await this.healthProblemsService.findMany(data.healthProblems);

    const customer = await this.prisma.customer.create({
      data: {
        ...data,
        birthdate: new Date(data.birthdate),
        healthProblems: { connect: healthProblemsIds },
      }
    });

    return {
      ...customer,
      healthProblems
    };
  }

  findAll() {
    return `This action returns all customers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
