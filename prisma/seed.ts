import { FileHelper } from '@/utils/FileHelper'
import { Gender, Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const users: Prisma.UserCreateInput[] = [
    {
      email: 'alice@example.com',
      role: 'USER',
      birthday: new Date('2001-12-18'),
      name: 'Алиса',
      gender: Gender.FEMALE,
    },
    {
      email: 'maksim@mail.ru',
      role: 'USER',
      birthday: new Date('1995-02-23'),
      name: 'Максим',
      gender: Gender.MALE,
    },
    {
      email: 'worldexplorer@gmail.com',
      role: 'USER',
      birthday: new Date('1990-11-11'),
      gender: Gender.MALE,
      name: 'Александр',
    },
    {
      email: 'devdeploy@test.com',
      role: 'USER',
      birthday: new Date('1999-08-01'),
      name: 'Андрей',
      gender: Gender.MALE,
    },
    {
      email: 'shoplover@mail.ru',
      role: 'USER',
      birthday: new Date('1992-07-30'),
      name: 'София',
      gender: Gender.FEMALE,
    },
  ]

  // создаем пользователей
  await prisma.user.createMany({
    data: users,
  })

  const category = await prisma.category.create({
    data: {
      name: 'Обувь',
      image: {
        create: await FileHelper.getInfo('seed/shoes.png'),
      },
    },
  })

  const subCategory = await prisma.category.create({
    data: {
      name: 'Кроссовки',
      image: {
        create: await FileHelper.getInfo('seed/sneakers.png'),
      },
      category: { connect: { id: category.id } },
    },
  })

  await prisma.category.create({
    data: {
      name: 'Растения',
      image: {
        create: await FileHelper.getInfo('seed/plants.png'),
      },
    },
  })

  const products: Prisma.ProductCreateInput[] = [
    {
      name: 'Кроссовки Nike Air Max 270',
      price: 10700,
      description: `Стильные и удобные кроссовки Nike Air Max 270, идеально подходящие для повседневной носки и занятий спортом. Обеспечивают отличную амортизацию и комфорт благодаря технологии Air Max.`,
      images: {
        create: [await FileHelper.getInfo('seed/nike_air_max.png')],
      },
      category: { connect: { id: subCategory.id } },
    },
    {
      name: 'Кроссовки Adidas Ultraboost 21',
      price: 11990,
      description: `Кроссовки Adidas Ultraboost 21 - это идеальный выбор для занятий спортом и повседневной носки. Обеспечивают отличную амортизацию и комфорт.`,
      images: {
        create: [await FileHelper.getInfo('seed/adidas_ultraboost.png')],
      },
      category: { connect: { id: subCategory.id } },
    },
    {
      name: 'Кроссовки Puma RS-X3',
      description: 'Кроссовки Puma RS-X3 - это стильные и удобные кроссовки, идеально подходящие для повседневной носки и занятий спортом.',
      price: 8990,
      images: {
        create: [await FileHelper.getInfo('seed/puma_rs_x3.png')],
      },
    }
  ]

  // создаем товары
  for await (const product of products) {
    await prisma.product.create({
      data: product,
    })
  }
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
