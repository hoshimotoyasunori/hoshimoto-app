import Image from 'next/image'
import test from '../styles/Test.module.scss'

export default function Home() {
  return (
    
    <div className={test.container}>
      <main className={test.main}>
        <Image src="/tehon.png" className={test.main_img} width={300} height={300}  alt="hoshimoto profile icon" />

        <div className={test.grid}>
          <a href="https://nextjs.org/docs" className={test.card}>
            <h2>About &rarr;</h2>
            <p>星本泰憲について</p>
          </a>

          <a href="https://nextjs.org/learn" className={test.card}>
            <h2>History &rarr;</h2>
            <p>経歴</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={test.card}
          >
            <h2>Strengths&rarr;</h2>
            <p>できること</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={test.card}
          >
            <h2>Other &rarr;</h2>
            <p>
              目指していること
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
