import styles from "./Content.module.css";
import ImageGrid from "../Grid/imageGrid";

type ContentProps = {
  title: string;
  subTitle: string;
  content: string;
  reverse?: boolean;
  className?: string;
};

export default function ContentComponent({
  title,
  subTitle,
  content,
}: ContentProps) {
  return (
    <>
      <section className={styles.contentSection}>
        <section className={styles.content}>
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
          <p>{content}</p>
        </section>
        <section className={styles.imageSection}>
          <picture className={styles.picture}>
            <ImageGrid />
          </picture>
        </section>
      </section>
    </>
  );
}
