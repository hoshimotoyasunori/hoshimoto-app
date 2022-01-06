import Image from "next/image";
import index from '../styles/Index.module.scss'

const Home = () => {
  return (
    <div className={index.container}>
      <p>WELCOME TO<br/><span>HOSHIMOTO&apos;S<br/>PORTFOLIO</span></p>
    </div>

  );
}

export default Home