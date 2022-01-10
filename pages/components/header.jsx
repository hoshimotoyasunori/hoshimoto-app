import Link from "next/link";
import Image from 'next/image';
import header from '../../styles/Header.module.scss'
import React, {useState} from "react";

const Header =()=> {
    const [openMenu, setOpenMenu] = useState(false);
    const menuFunction = () => { setOpenMenu(!openMenu);}

    return(
        <React.Fragment>
            <header id='header' className={header.container}>
                <div className={header.box}>
                    <div className={header.logo}>
                        <Link href="/">
                            <a>
                                <Image src="/hoshimoto.png" width={200} height={40}  alt="hoshimoto header logo" className={header.logo}/>
                            </a>
                        </Link>
                    </div>
                    <nav  className={header.nav} >
                        <ul className={header.list}>
                            <li><Link href="/"><a className={header.item}>Top</a></Link></li>
                            <li><Link href="/about"><a className={header.item}>About</a></Link></li>
                            <li><Link href="/skills"><a className={header.item}>Skill</a></Link></li>
                            <li><Link href="/works"><a className={header.item}>Works</a></Link></li>
                            <li><Link href="/contact"><a className={header.item}>Contact</a></Link></li>
                        </ul>
                    </nav>
                    <div className={header.humburger} onClick={() => menuFunction()}>
                        <span className={openMenu ? header.open : undefined}></span>
                        <span className={openMenu ? header.open : undefined}></span>
                        <span className={openMenu ? header.open : undefined}></span>
                    </div>
                </div>
                <div className={`${header.drawerMenu} ${openMenu ? header.open : undefined}`}>
                    <div className={header.close} onClick={() => menuFunction()}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul onClick={() => menuFunction()}>
                        <li><Link href="/"><a >Top</a></Link></li>
                        <li><Link href="/about"><a >About</a></Link></li>
                        <li><Link href="/skills"><a >Skill</a></Link></li>
                        <li><Link href="/works"><a >Works</a></Link></li>
                        <li><Link href="/contact"><a >Contact</a></Link></li>
                    </ul>
                </div>
            </header>

        </React.Fragment>
    )
}
export default Header