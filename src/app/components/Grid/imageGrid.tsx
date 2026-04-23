import style from "./imageGrid.module.css";
import Image from "next/image";

export default function ImageGrid() {
  return (
    <section className={style.imageGridContainer}>
      <div className={style.imageGrid}>
        <div className={`${style.card} ${style.small1}`}>
          <Image
            src="/yoksel-zok-Em76WMintrk-unsplash.jpg"
            alt="Small image 1"
            fill
            sizes="(max-width: 900px) 100vw, 20vw"
          />
        </div>

        <div className={`${style.card} ${style.small2}`}>
          <Image
            src="/laura-adai-KPG5nwVPMbo-unsplash.jpg"
            alt="Small image 2"
            fill
            sizes="(max-width: 900px) 100vw, 20vw"
          />
        </div>

        <div className={`${style.card} ${style.center}`}>
          <Image
            src="/theo-laflamme-yg24LApTKP4-unsplash.jpg"
            alt="Large center image"
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
          />
        </div>

        <div className={`${style.card} ${style.small3}`}>
          <Image
            src="/laura-adai-KPG5nwVPMbo-unsplash.jpg"
            alt="Small image 3"
            fill
            sizes="(max-width: 900px) 100vw, 20vw"
          />
        </div>

        <div className={`${style.card} ${style.small4}`}>
          <Image
            src="/yoksel-zok-Em76WMintrk-unsplash.jpg"
            alt="Small image 4"
            fill
            sizes="(max-width: 900px) 100vw, 20vw"
          />
        </div>

       
      </div>
    </section>
  );
}
