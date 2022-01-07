import '../styles/globals.scss'
import 'modern-css-reset/dist/reset.min.css' 
import Layout from './components/layout';

const MyApp =({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
