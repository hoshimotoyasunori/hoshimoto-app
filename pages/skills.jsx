import Image from "next/image";
import skills from '../styles/Skills.module.scss'

const Home = () => {
    return (
        <div className={skills.container}>
            <div className={skills.title}>
                <h1>SKILLS</h1>
                <p></p>
            </div>
            <div className={skills.item}>
                        <h2>Skill</h2>
                        <span></span>
                        <div className={skills.skills}>
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

    );
}

export default Home