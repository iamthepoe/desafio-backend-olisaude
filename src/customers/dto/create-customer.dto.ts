export class CreateCustomerDto {
  name: string;
  birthdate: Date;
  sex: 'M' | 'F';
  healthProblems: String[];
}
