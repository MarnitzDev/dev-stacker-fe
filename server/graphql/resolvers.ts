// Mock data for tools
const tools = [
  {
    id: '1',
    name: 'Nuxt UI',
    slug: 'nuxt-ui',
    description: 'UI library for Nuxt',
    category: 'UI',
    tags: ['nuxt', 'ui', 'library']
  }
];

export const resolvers = {
  Query: {
    tools: (_: any, { category, search }: { category?: string; search?: string }) => {
      let list = tools;
      if (category) list = list.filter(t => t.category === category);
      if (search) list = list.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));
      return list;
    },
    tool: (_: any, { slug }: { slug: string }) => tools.find(t => t.slug === slug),
  },
  Mutation: {
    addTool: (_: any, args: any) => {
      const newTool = { id: Date.now().toString(), slug: args.name.toLowerCase(), ...args };
      tools.push(newTool);
      return newTool;
    },
  },
};
