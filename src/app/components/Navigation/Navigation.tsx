import style from "./Navigation.module.css";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className={style.navContainer}>   
        <Image src='/CE-logo-x1.png' alt="Celeste Evertsen" width={400} height={100} className={style.logo}/>
        <ul className={style.navList}>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        </nav>
    )
}