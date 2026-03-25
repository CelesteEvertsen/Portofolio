import Header from "./components/Header/Header";
import About from "./components/About";
import ContentComponent from "./components/Content/Content";
import MyProjectComponent from "./components/Project/Project";

export default function HomePage() {
  return(
  <>
  <Header
    image="/celeste.JPG"
    name="Celeste Evertsen"
    title="Frontend Developer"
    subtitle="Creating beautiful and functional websites"
    content="I am a frontend developer with a passion for creating beautiful and functional websites. I have experience with React, JavaScript, and CSS. I am always looking for new challenges and opportunities to learn and grow as a developer."
  />
  <ContentComponent
    image="/gif.gif"
    name="Education"
    title="Education"
    subTitle="Fullstack - Nutritionist - CloudSecurity - Digital assurance & management"
    content="I have a nice backpack with education, And I am still trying to fill that bag up. I am no jet a fullstack badie, but I am starting my backend journy fall 2026. While I was on my last year in fronend developer, I took a course in Clodu security at Kristiania College, that course Open my interest in Digital assurance and management, this will be a Bachelor degree that will start fall 2026  "
  />
  <MyProjectComponent/>
  <About />
  </>);
}