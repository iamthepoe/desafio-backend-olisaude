import { PartialType } from '@nestjs/swagger';
import { CreateHealthProblemDto } from './create-health-problem.dto';

export class UpdateHealthProblemDto extends PartialType(CreateHealthProblemDto) {}
