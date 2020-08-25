import { wrapper } from '../../store/store'
import Layout from '../layouts/AppLayout.js'
import './styles.sass'

const WrappedApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(WrappedApp)
