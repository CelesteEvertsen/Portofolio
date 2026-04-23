import style from "./about.module.css";
import AboutComponent from "../components/About/About";
import ContentComponent from "../components/Content/Content";
import DividerLine from "../components/DividerLine/DividerLine";
export default function Aboutpage() {
  return (
    <section className={style.aboutContainer}>
     
        <AboutComponent />
    
         <DividerLine />
    
        {" "}
        <ContentComponent
          title="Education"
          subTitle="Full-Stack - Nutritionist - Cloud Security - Digital Assurance & Management"
          content="I have a solid educational background, and I am still working to build on it. I am not yet a full-stack developer, but I am starting my backend journey in fall 2026. During my final year in frontend development, I took a course in Cloud Security at Kristiania College. That course sparked my interest in Digital Assurance and Management, which will be my bachelor's degree starting in fall 2026."
        />
    
    </section>
  );
}
