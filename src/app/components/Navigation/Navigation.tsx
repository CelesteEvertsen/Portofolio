import Link from "next/link";
import style from "./Navigation.module.css";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className={style.navContainer}>
      <Link href="/">
        <Image
          src="/CE-logo-x1.png"
          alt="Celeste Evertsen"
          width={400}
          height={100}
          className={style.logo}
        />
      </Link>
      <ul className={style.navList}>
        <li>
          <Link className={style.navLink} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={style.navLink} href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={style.navLink} href="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className={style.navLink} href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
