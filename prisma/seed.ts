import { PrismaClient } from '../app/generated/prisma/index.js'
const prisma = new PrismaClient()

async function main() {
  await prisma.tool.create({
    data: {
      name: "Nuxt UI",
      category: "UI",
      tags: ["nuxt", "ui", "library"],
      description: "UI library for Nuxt",
      slug: "nuxt-ui"
    }
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
