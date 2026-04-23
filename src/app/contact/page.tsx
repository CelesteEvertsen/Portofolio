import Link from "next/dist/client/link";
import style from "./contact.module.css";

export default function ContactPage() {
  
  return (
    <section className={style.contactContainer}>
      <h1>Contact</h1>
      <p>You can contact me via LinkedIn:</p>
      <Link className={style.link} href="https://www.linkedin.com/in/celeste-evertsen-a860b734b/" target="_blank">LinkedIn</Link>
      <p>The reason is that i dont want to share my email publicly.</p>
      </section>
)}