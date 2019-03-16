import gql from 'graphql-tag'

export const GET_CARS_LIST = gql`
  query cars($keywords: String) {
    cars(keywords: $keywords) {
      id
      model
      description
    }
  }
`
