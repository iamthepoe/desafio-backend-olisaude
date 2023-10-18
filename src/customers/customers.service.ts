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
    return this.prisma.customer.findMany({ include: { healthProblems: true } });
  }

  async findOne(id: string) {
    const customer = await this.prisma.customer.findFirst({ where: { id }, include: { healthProblems: true } });
    if (!customer) throw new NotFoundException('Customer not found.');
    return customer;
  }

  async update(id: string, data: UpdateCustomerDto) {
    let healthProblems = {};
    let healthProblemsIds: { id: string }[];

    const customer = await this.prisma.customer.findFirst({ where: { id }, select: { id: true } });
    if (!customer) throw new NotFoundException('Customer not found.');

    if (data?.healthProblems) {
      await this.healthProblemsService.findMany(data.healthProblems);
      healthProblemsIds = data.healthProblems?.map(id => { return { id } });
      healthProblems = { connect: healthProblemsIds };
    }


    return this.prisma.customer.update({
      where: { id },
      data: {
        ...data,
        birthdate: new Date(data.birthdate),
        healthProblems: healthProblems || undefined
      },
      include: { healthProblems: true }
    });
  }

  async remove(id: string) {
    const customer = await this.prisma.customer.findFirst({ where: { id }, select: { id: true } });
    if (!customer) throw new NotFoundException('Customer not found.');
    return this.prisma.customer.delete({ where: { id } });
  }

  async getTopHealthRiskCustomers() {
    let topCustomersQuery = await this.prisma.$queryRaw`
    SELECT
      "Customer"."id" AS "customer_id",
      "Customer"."name" AS "customer_name",
      SUM("HealthProblem"."degree") AS "total_degree"
    FROM
      "_CustomerToHealthProblem" AS "CustomerHealthProblem"
    JOIN
      "customers" AS "Customer"
    ON
      "CustomerHealthProblem"."A" = "Customer"."id"
    JOIN
      "health_problems" AS "HealthProblem"
    ON
      "CustomerHealthProblem"."B" = "HealthProblem"."id"
    GROUP BY
      "Customer"."id", "Customer"."name"
    ORDER BY
      "total_degree" DESC
    LIMIT 10;
    ` as { customer_id: string, customer_name: string, total_degree: number }[];

    let topCustomers = topCustomersQuery.map((customer) => ({
      name: customer.customer_name,
      score: (1 / (1 + Math.E ** -(-2.8 + Number(customer.total_degree)))) * 100,
    }));


    return topCustomers;
  }
}
