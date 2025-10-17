import { gql } from 'graphql-tag'

export default gql`
  query GetTools {
    tools {
      id
      name
      category
      tags
    }
  }
`