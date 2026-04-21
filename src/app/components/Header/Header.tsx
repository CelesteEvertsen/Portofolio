"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import { useEffect, useRef, useState } from "react";

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
  const [showScrollReminder, setShowScrollReminder] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reminderTimer = window.setTimeout(() => {
      const section = headerRef.current;
      if (!section) return;

      const rect =
        section.getBoundingClientRect(); /*  Gir informasjon om hvor toppen, bunden og  størrelen på elementet */
      const sectionStillVisible =
        rect.top < window.innerHeight &&
        rect.bottom >
          window.innerHeight *
            0.3; /* Sjekker om elementet er synlig i viewporten */
      const hasScrolled =
        window.scrollY >
        20; /* Sjekker om brukeren har scrollet ned mer enn 20px */

      if (sectionStillVisible && !hasScrolled) {
        setShowScrollReminder(true);
      }
    }, 5000);

    const hideReminderOnScroll = () => {
      if (window.scrollY > 20) {
        setShowScrollReminder(false);
      }
    };
    window.addEventListener("scroll", hideReminderOnScroll, { passive: true });

    return () => {
      window.clearTimeout(reminderTimer);
      window.removeEventListener("scroll", hideReminderOnScroll);
    };
  }, []);
  return (
    <header className={styles.headerContainer} ref={headerRef}>
        <Image  className={styles.image}
          src={image}
          alt={name}
          width={600}
          height={600}
        />
      <section className={styles.content}>
        <h1>
          {name} {title}
        </h1>
        <h2>{subtitle}</h2>
        <p>{content}</p>
        {showScrollReminder && <span className={styles.scrollReminder}>Scroll down to see more</span>}
      </section>
    </header>
  );
}
