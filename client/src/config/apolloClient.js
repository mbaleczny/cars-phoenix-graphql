import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import ROOT_URL from './rootUrl'

const httpLink = new HttpLink({
  uri: `${ROOT_URL}/graphql`,
  opts: {
    credentials: process.env.NODE_ENV === 'development'
      ? 'include'
      : 'same-origin'
  }
})

export default new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
