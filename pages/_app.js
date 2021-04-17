import '../styles/globals.css'
import Layout from '../components/en/layout' 


function MyApp({ Component, pageProps }) {
  return (
    
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
