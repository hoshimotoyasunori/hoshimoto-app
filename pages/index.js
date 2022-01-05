import Image from "next/image";
import index from '../styles/Index.module.css'

const Home = () => {
  return (
    <div className={index.container}>
      <Image src="/tehon.png" width={400} height={400}  alt="tehon main" />
    </div>

  );
}

export default Home