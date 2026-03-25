import Image from 'next/image'
import styles from './Content.module.css'

type ContentProps = {
  image?: string
  name: string
  title: string
  subTitle: string
  content: string
  reverse?: boolean
  className?: string
}

export default function ContentComponent({
  image,
  name,
  title,
  subTitle,
  content,
  reverse = false,
  className,
}: ContentProps) {
  return (
   <section className={[styles.contentSection, reverse ? styles.reverse : '', className].filter(Boolean).join(' ')}>
      <picture className={styles.picture}>
        {image && (
          <Image className={styles.image}
            src={image}
            alt={name}
            width={600}
            height={500}
          />
        )}
      </picture>

      <section className={styles.content}>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <p>{content}</p>
      </section>
    </section>
  )
}
