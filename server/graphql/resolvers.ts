
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const resolvers = {
  Query: {
    tools: async (_: any, { category, search }: { category?: string; search?: string }) => {
      const where: any = {};
      if (category) where.category = category;
      if (search) where.name = { contains: search, mode: 'insensitive' };
      return prisma.tool.findMany({ where });
    },
    tool: async (_: any, { slug }: { slug: string }) =>
      prisma.tool.findUnique({ where: { slug } }),
  },
  Mutation: {
    addTool: async (_: any, args: any) => {
      // Prisma does not support array input for tags by default, so ensure tags is an array
      const { name, category, tags = [], description } = args;
      const slug = name.toLowerCase().replace(/\s+/g, '-');
      return prisma.tool.create({
        data: { name, category, tags, description, slug },
      });
    },
  },
};
