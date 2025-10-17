export const schema = /* GraphQL */ `
  type Tool {
    id: ID!
    name: String!
    slug: String!
    description: String!
    category: String!
    tags: [String!]!
  }

  type Query {
    tools(category: String, search: String): [Tool!]!
    tool(slug: String!): Tool
  }

  type Mutation {
    addTool(name: String!, category: String!, tags: [String!]!, description: String!): Tool!
  }
`;
