import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { provideApolloClient } from '@vue/apollo-composable'

// @ts-expect-error: defineNuxtPlugin is provided by Nuxt at runtime
export default defineNuxtPlugin(() => {
  const client = new ApolloClient({
    uri: '/api/graphql',
    cache: new InMemoryCache(),
  })
  provideApolloClient(client)
})