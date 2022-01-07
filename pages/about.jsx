import Image from "next/image";
import about from '../styles/About.module.scss'

const Home = () => {
  return (
    <div className={about.container}>
        <div className={about.title}>
            <h1>ABOUT</h1>
            <p></p>
        </div>
        <div className={about.box}>
            <span>
                <Image src="/tehon.png" width={300} height={300}  alt="tehon main" />
            </span>
            <div className={about.prof}>
                <div className={about.item}>
                    <h1>profile</h1>
                    <p>プロフィールを紹介します。</p>
                </div>
                <div className={about.item}>
                    <h1>profile</h1>
                    <p>プロフィールを紹介します。</p>
                </div>
                <div className={about.item}>
                    <h1>profile</h1>
                    <p>プロフィールを紹介します。</p>
                </div>
                <div className={about.item}>
                    <h1>profile</h1>
                    <p>プロフィールを紹介します。</p>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Home