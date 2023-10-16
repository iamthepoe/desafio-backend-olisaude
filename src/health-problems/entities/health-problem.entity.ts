import { HealthProblem } from "@prisma/client";

export class HealthProblemEntity implements HealthProblem {
  id: string;
  name: string;
  degree: number;
}
