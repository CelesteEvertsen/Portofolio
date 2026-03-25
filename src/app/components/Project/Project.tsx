
import Image from 'next/image'
import style from './Project.module.css'
import Link from 'next/link'
import {item} from '../../../data/project'



export default function MyProjectComponent() {
  return (
    <section className={style.container}>
      <h1 className={style.h1}>My Projects</h1>
      <section className={style.imageContainer}>
        {item.map((project, index) => (
          <Link key={`${index}-${project.slug}`} href={`/project/${project.slug}`}>

          <section className={style.image}>
            <Image
              src={project.image}
              alt={project.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className={style.overlay} aria-hidden="true">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <span>Read more</span>
            </div>
          </section>
        </Link>
      ))}
      </section>
    
    </section>
  )
}
