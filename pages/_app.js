import '../styles/globals.css'
import Layout from './components/layout';

const MyApp =({ Component, pageProps }) => {
  // const getLayout = Component.getLayout || ((page) =>  page);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
