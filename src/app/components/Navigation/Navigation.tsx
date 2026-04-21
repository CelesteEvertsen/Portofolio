import style from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={style.navContainer}>   
        <h1>Logo</h1>
        <ul className={style.navList}>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        </nav>
    )
}