import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient';
import { wrapper } from '../../store/store'
import Layout from '../layouts/AppLayout'
import './globalstyles.sass'

const WrappedApp = ({ Component, pageProps }) => {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default wrapper.withRedux(WrappedApp)
