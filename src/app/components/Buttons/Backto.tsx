import Link from "next/link";
import style from "./Backto.module.css";

type BackToButton = {
  title: string;
  href: string;
  type?: 'button' | 'submit' | 'reset';
};

export default function BackToButton({ title, href, type }: BackToButton) {
  return (
    <Link className={style.link} href={href}>
      {" "}
      <button className={style.button} type={type}>{title}</button>
    </Link>
  );
}
