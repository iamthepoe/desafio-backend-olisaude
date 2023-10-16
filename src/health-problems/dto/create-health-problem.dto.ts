import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, Max, Min } from "class-validator";

export class CreateHealthProblemDto {
  @ApiProperty({ example: "Diabetes" })
  @IsString()
  name: string;

  @ApiProperty({ example: 2 })
  @IsInt()
  @Min(1)
  @Max(2)
  degree: 1 | 2;
}
