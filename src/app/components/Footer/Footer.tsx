import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <footer className={style.footer}>
      <div>
        <h3>Where am I hiding?</h3>
        <h3>Right here</h3>
      </div>

      <section>
        <Link className={style.link} href="https://github.com/CelesteEvertsen" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </Link>
        <Link className={style.link} href="https://www.linkedin.com/in/celeste-evertsen-a860b734b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </Link>
      </section>
     
    </footer>
     <p className={style.copyright}>© 2024 Celeste Evertsen. All rights reserved.</p>
    </>
  )
}
