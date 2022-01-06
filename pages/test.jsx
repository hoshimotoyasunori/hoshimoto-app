import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';

export default function Home() {
  return (
    
    <div className={styles.container}>
    <Layout>
      <main className={styles.main}>
        <Image src="/tehon.png" className={styles.main_img} width={300} height={300}  alt="hoshimoto profile icon" />

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>About &rarr;</h2>
            <p>星本泰憲について</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>History &rarr;</h2>
            <p>経歴</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Strengths&rarr;</h2>
            <p>できること</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Other &rarr;</h2>
            <p>
              目指していること
            </p>
          </a>
        </div>
      </main>
      </Layout>

    </div>
  )
}
