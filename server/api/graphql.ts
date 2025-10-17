import { createSchema, createYoga } from 'graphql-yoga'
import { schema } from '../graphql/schema'
import { resolvers } from '../graphql/resolvers'

const yoga = createYoga({
  schema: createSchema({
    typeDefs: schema,
    resolvers,
  }),
  graphqlEndpoint: '/api/graphql',
  // Disable built-in CORS handling, let Nuxt handle it
  cors: false,
})

export default defineEventHandler((event) => {
  return yoga.handle(event.node.req, event.node.res)
})