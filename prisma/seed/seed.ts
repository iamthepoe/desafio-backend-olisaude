import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const problemA = await prisma.healthProblem.upsert({
    where: { id: 'a3a751a2-97ab-419c-9a81-c21363dfc03b' },
    update: {},
    create: {
      id: 'a3a751a2-97ab-419c-9a81-c21363dfc03b',
      name: 'Problema A',
      degree: 1,
    },
  });

  const problemB = await prisma.healthProblem.upsert({
    where: { id: '5c43c371-be79-4f49-b9c1-d4a77176785b' },
    update: {},
    create: {
      id: '5c43c371-be79-4f49-b9c1-d4a77176785b',
      name: 'Problema B',
      degree: 2,
    },
  });

  const problemC = await prisma.healthProblem.upsert({
    where: { id: 'aaebf25d-0728-464d-aa37-840df62e89f8' },
    update: {},
    create: {
      id: 'aaebf25d-0728-464d-aa37-840df62e89f8',
      name: 'Problema C',
      degree: 2,
    },
  });

  const firstCustomer = await prisma.customer.upsert({
    where: { id: 'aaebf25d-0728-464d-aa37-840df62e89f8' },
    update: {},
    create: {
      id: 'aaebf25d-0728-464d-aa37-840df62e89f8',
      name: 'Roberto Bolanos',
      sex: 'M',
      birthdate: new Date('1985-01-01'),
      healthProblems: {
        connect: [
          { id: 'aaebf25d-0728-464d-aa37-840df62e89f8' },
          { id: '5c43c371-be79-4f49-b9c1-d4a77176785b' },
        ]
      }
    },
  });

  const secondCustomer = await prisma.customer.upsert({
    where: { id: '5c43c371-be79-4f49-b9c1-d4a77176785b' }, update: {},
    create: {
      id: '5c43c371-be79-4f49-b9c1-d4a77176785b',
      name: 'Donald McDonald',
      sex: 'F',
      birthdate: new Date('1969-01-01'),
      healthProblems: {
        connect: [
          { id: 'aaebf25d-0728-464d-aa37-840df62e89f8' },
        ]
      }
    },
  });

  const thirdCustomer = await prisma.customer.upsert({
    where: { id: 'a3a751a2-97ab-419c-9a81-c21363dfc03b' }, update: {},
    create: {
      id: 'a3a751a2-97ab-419c-9a81-c21363dfc03b',
      name: 'Carl Johnson',
      sex: 'M',
      birthdate: new Date('1999-01-01'),
      healthProblems: {
        connect: [
          { id: 'a3a751a2-97ab-419c-9a81-c21363dfc03b' },
        ]
      }
    },
  });

  console.log(problemA, problemB, problemC);
  console.log(firstCustomer, secondCustomer, thirdCustomer);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
