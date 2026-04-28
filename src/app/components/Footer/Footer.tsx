import Link from "next/link";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.menu}>
          <h3>Menu</h3>
          <ul className={style.list}>
            <li>
              <Link className={style.link} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={style.link} href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={style.link} href="/portfolio">
                Portofolio
              </Link>
            </li>
            <li>
              <Link className={style.link} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.social}>
          <h3>Socials</h3>
          <ul className={style.list}>
            <li>
              <Link
                className={style.link}
                href="https://github.com/CelesteEvertsen"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                className={style.link}
                href="https://www.linkedin.com/in/celeste-evertsen-a860b734b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.projects}>
          <h3>Projects</h3>
          <Link className={style.link} href="/portfolio">
            Portofolio
          </Link>
        </div>
      </div>
      <div className={style.copyright}>
        &copy; {new Date().getFullYear()} Celeste Evertsen. All rights reserved.
      </div>
    </footer>
  );
}
