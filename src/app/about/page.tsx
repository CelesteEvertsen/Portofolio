import style from "./about.module.css";
import AboutComponent from "../components/About/About";
import ContentComponent from "../components/Content/Content";
import DividerLine from "../components/DividerLine/DividerLine";
export default function Aboutpage() {
  return (
    <section className={style.aboutContainer}>
      <AboutComponent />
      <DividerLine />{" "}
      <ContentComponent
        title="Education"
        subTitle="Full-Stack - Cloud Security - Nutrition"
        content="I have a solid educational background, and I am still working to build on it. I am not yet a full-stack developer, but I am starting my backend journey in fall 2026. During my final year in frontend development, I took a course in Cloud Security at Kristiania College. "
      />
    </section>
  );
}
