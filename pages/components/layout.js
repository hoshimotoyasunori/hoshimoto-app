import Head from 'next/head'
import Header from './header';
import Footer from './footer';
import styles from '../../styles/Home.module.css'

const Layout =({children})=>{

  return (
    <>
      <Head>
        <title>Hoshimoto App</title>
        <meta name="description" content="hoshimoto profile by create next app" />
        <link rel="icon" href="/tehon.svg" />
      </Head>
      <Header />
        <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout