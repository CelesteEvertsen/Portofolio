"use client";
import Image from "next/image";
import styles from "./Header.module.css";
type HeaderProps = {
  image: string;
  name: string;
  title: string;
  subtitle: string;
  content: string;
};

export default function Header({
  image,
  name,
  title,
  subtitle,
  content,
}: HeaderProps) {
  return (
    <header className={styles.headerContainer}>
      <Image
        className={styles.image}
        src={image}
        alt={name}
        width={600}
        height={600}
      />
      <section className={styles.content}>
        <h1>
          {name}
        </h1>
        <h2> {title}</h2>
        <h3>{subtitle}</h3>
        <p>{content}</p>
      </section>
    </header>
  );
}
