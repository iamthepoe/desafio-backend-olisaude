import { ApiProperty } from "@nestjs/swagger";
import { IsISO8601, IsOptional, IsString, Length } from "class-validator";
import { HealthProblemEntity } from "src/health-problems/entities/health-problem.entity";

export class CreateCustomerDto {
  @ApiProperty({ example: 'Helena da Silva' })
  @IsString()
  name: string;

  @ApiProperty({ example: '1985-07-15' })
  @IsISO8601()
  birthdate: Date;

  @ApiProperty({ examples: ['M', 'F'] })
  @IsString()
  @Length(1, 1)
  sex: 'M' | 'F';

  @ApiProperty({ examples: [['6e1a0b53-906d-4315-a7a7-e09c425cf9cd', '3b591a19-33e2-4595-94c0-c05a15ee6de9']] })
  @IsOptional()
  healthProblems: Array<HealthProblemEntity['id']>;
}
