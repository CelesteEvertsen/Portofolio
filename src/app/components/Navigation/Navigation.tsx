'use client'
import Link from "next/link";
import style from "./Navigation.module.css";
import Image from "next/image";
import HamburgerMenu from "./Hamburgermenu/Hamburger";
import { useState } from "react";

export default function Navigation() {
   const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }
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
      <HamburgerMenu isOpen={isOpen} onToggle={toggleMenu} onClose={closeMenu} />
    </nav>
  );
}
