import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import nav from "./HamburgerMenu.module.css";

type HamburgerMenuProps = {
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

export default function HamburgerMenu({ isOpen, onToggle, onClose }: HamburgerMenuProps) {
  return (
    <nav className={nav.hamburgerNav}>
      <div className={`${nav.hamburgerIcon} ${isOpen ? nav.iconHidden : ''}`} onClick={onToggle}>
        <GiHamburgerMenu />
      </div>
      <div className={`${nav.closingBtn} ${!isOpen ? nav.btnClosed : ''}`} onClick={onClose}>
        <IoCloseSharp />
      </div>
      <div className={`${nav.hamburgerMenu} ${isOpen ? nav.menuOpen : ''}`} onClick={onClose}>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/portfolio">
            <li>Portfolio</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}