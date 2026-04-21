import Header from "./components/Header/Header";
/* import About from "./components/About";
import ContentComponent from "./components/Content/Content";
import MyProjectComponent from "./components/Project/Project"; */

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
{/*   <ContentComponent
    image="/gif.gif"
    name="Education"
    title="Education"
    subTitle="Full-Stack - Nutritionist - Cloud Security - Digital Assurance & Management"
    content="I have a solid educational background, and I am still working to build on it. I am not yet a full-stack developer, but I am starting my backend journey in fall 2026. During my final year in frontend development, I took a course in Cloud Security at Kristiania College. That course sparked my interest in Digital Assurance and Management, which will be my bachelor's degree starting in fall 2026."
  />
  <MyProjectComponent title="My Projects"/>
  <About /> */}
  </>);
}