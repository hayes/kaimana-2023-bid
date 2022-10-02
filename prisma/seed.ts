import { PrismaClient } from '@prisma/client';
import { db } from '../lib/db';

const prisma = new PrismaClient();

async function main() {
  await db.commentThread.create({
    data: {
      id: 'example',
      comments: {
        create: [
          {
            name: 'Michael',
            comment: 'Hello, world',
          },
        ],
      },
    },
  });
}

main()
  .then(() => console.log('DB seeded with test data'))
  .catch((error) => {
    console.error(error);
    throw error;
  })
  .finally(() => {
    return prisma.$disconnect();
  });
