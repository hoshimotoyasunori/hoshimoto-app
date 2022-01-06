import Image from "next/image";
import about from '../styles/About.module.scss'

const Home = () => {
  return (
    <div className={about.container}>
        <div className={about.title}>
            <h1>About</h1>
        </div>
        <div className={about.box}>
            <div className={about.item}>
                <Image src="/tehon.png" width={400} height={400}  alt="tehon main" />
            </div>
            <div className={about.item}>
                <h1>profile</h1>
                <p>プロフィールを紹介します。</p>
            </div>
        </div>
    </div>

  );
}

export default Home