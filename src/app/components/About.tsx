import style from './About.module.css';
import { Island_Moments } from 'next/font/google'
const islandMoments = Island_Moments({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-island-moments',
})
export default function AboutComponent() {
  return (
    <section className={style.aboutSection}>
      <h1>About Me</h1>
     <div className={style.dividerLine}></div>
      <article className={style.contentText}>
        <p>
          Amazing that you’re still here with me. So, as you can tell, my name
          is Celeste Evertsen. As a woman, I will not disclose my age. Rude of
          you to ask.
        </p>
        <p>
          My previous job had nothing to do with tech. I was actually a
          nutritionist for a couple of years, and I loved it. But then the
          market changed, and I wanted to do something new, something bold. As a
          responsible, unemployed girly, I was doom‑scrolling through social
          media and came across web development. I started doing some research
          and found an ad from Gokstad Akademiet, applied, and the rest is
          history.
        </p>
        <p>But wait, there is more!</p>
        <p>
          When I'm not trying to improve my coding, CV, or portfolio, you'll
          find me sweating in the gym, lifting weights like my life depends on
          it.
        </p>
        <br />
        <p className={style.listTitle}>I’m basically a mix of:
        </p>
        <ul className={style.list}>
          <li>Tech‑girly in training</li>
          <li>
            Nutritionist who loves to help people that want to improve their
            health
          </li>
          <li>Gym‑rat with questionable strength</li>
          <li>And a future frontend developer who refuses to give up!</li>
        </ul>
        <br />
        <h2>What can I offer?</h2>
        <p>A determined work ethic, a love for learning,
        a sprinkle of chaos, and the ability to make even the most boring tasks
        fun. If you’re looking for someone who shows up, tries hard, and laughs
        through the struggle,</p>
        <span>hi, it’s me.</span>
      </article>
       <p className={style.signature + ' ' + islandMoments.className}>- Celeste Evertsen</p>
    </section>
  );
}
