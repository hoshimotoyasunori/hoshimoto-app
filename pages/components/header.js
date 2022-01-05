import Link from "next/link";
import Image from 'next/image';
import header from '../../styles/Header.module.css'

const Header =()=> {
    return(
        <div className={header.container}>
            <div className={header.box}>
                <Image src="/hoshimoto.png" width={200} height={50}  alt="hoshimoto header logo" className={header.logo}/>
                <ul className={header.list}>
                    <li className={header.item}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className={header.item}>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header