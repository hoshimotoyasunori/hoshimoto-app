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
                    <Image src="/tehon.png" width={400} height={400}  alt="tehon main" />
                </span>
                <div className={about.prof}>
                    <div className={about.item}>
                        <h2>Profile</h2>
                        <span></span>
                        <p>
                            氏名：星本泰憲（ほしもとやすのり）<br/>
                            居住地：福岡県宗像市<br/>
                            出身大学：近畿大学<br/>
                            座右の銘：初動無くして、稼働なし<br/><br/>
                            ポートフォリオをご覧いただきありがとうございます。元プロラグビー選手としての経験を活かしたエンジニアを目指している星本と申します。<br/>
                            趣味は元プロスポーツ選手としての視点を持ちながら、他競技のスポーツを観ることで他競技から学ぶことです。<br/>
                            G&apos;sAcademyFukuokaでエンジニアの基礎を習得し、スポーツテックで世界を変えることを目標にしています。<br/>
                        </p>
                    </div>
                    <div className={about.item}>
                        <h2>Skill</h2>
                        <span></span>
                        <div className={about.skills}>
                            <div><Image src="/html.png" width={70} height={70}  alt="tehon main" /></div>                        
                            <div><Image src="/css.png" width={70} height={70}  alt="tehon main" /></div>
                            <div><Image src="/php.png" width={70} height={70}  alt="tehon main" /></div>
                            <div><Image src="/javascript.png" width={70} height={70}  alt="tehon main" /></div>
                            <div><Image src="/sass.png" width={70} height={70}  alt="tehon main" /></div>
                            <div><Image src="/nextjs.png" width={70} height={70}  alt="tehon main" /></div>
                            <div><Image src="/python.png" width={70} height={70}  alt="tehon main" /></div>
                            <div><Image src="/flask.png" width={70} height={70}  alt="tehon main" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home