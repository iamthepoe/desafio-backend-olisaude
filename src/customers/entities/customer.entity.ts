import { Customer } from "@prisma/client";

export class CustomerEntity implements Customer {
  id: string;
  sex: string;
  name: string;
  birthdate: Date;
  createdAt: Date;
  updatedAt: Date;
}
