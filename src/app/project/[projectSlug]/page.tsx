import {  item } from "@/data/project";
import Image from "next/image";
import style from './project.module.css'
import { FaGithub } from 'react-icons/fa'
import { SiNetlify } from "react-icons/si";
import Link from "next/link";

export default async function ProjectPage({ params }: { params: Promise<{ projectSlug: string }> }) {
  const { projectSlug } = await params;
  const project = item.find((p) => p.slug === projectSlug);

  if (!project) return <h1>Project not found</h1>;

  return (
    <>
    <Link className={style.backTo} href="/">Back to Projects</Link>
    <section className={style.section}>
      <h1 className={style.title}>{project.title}</h1>
      <Image className={style.image} src={project.image} alt={project.title} width={600} height={600} />
      <p>{project.content}</p>
      <section>
        <div>{project.githubLink && <Link className={style.link} href={project.githubLink} target="_blank"><FaGithub /> GitHub</Link>}</div>
        <div>{project.websiteLink && <Link className={style.link} href={project.websiteLink} target="_blank"><SiNetlify /> Website</Link>}</div>
       
      </section>

    </section>
    </>
  );
}