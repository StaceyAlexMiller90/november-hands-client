import { useMemo } from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { API_URL } from '../config/constants'

let apolloClient

const createApolloClient = () => {
  const { HttpLink } = require("@apollo/client/link/http");

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    
    link: new HttpLink({
      uri: `${API_URL}/graphql`,
    }),   
    cache: new InMemoryCache()
  })
}

export const initialiseApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient()

  if(initialState) {
    console.log(initialState)
    _apolloClient.cache.restore(initialState)
  }

  if(typeof window === 'undefined') {
    return _apolloClient
  }

  apolloClient = apolloClient ?? _apolloClient

  return apolloClient
}

export const useApollo = (initialState) => {
  const store = useMemo(() => initialiseApollo(initialState), [initialState])
  return store
}
