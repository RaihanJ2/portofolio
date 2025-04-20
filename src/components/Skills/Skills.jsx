import js from "../../assets/img/logo/js.png";
import css from "../../assets/img/logo/css.png";
import html from "../../assets/img/logo/html.png";
import react from "../../assets/img/logo/reactjs.png";
import tailwind from "../../assets/img/logo/tailwind.png";
import bootstrap from "../../assets/img/logo/bootstrap.png";
import SectionTitle from "../Layout/SectionTitle";
import Grid from "../Layout/Grid";
import ContainerLayout from "../Layout/ContainerLayout";

import "./style.css";

function Skills() {
  const DATA_SKILLS = [
    {
      name: "Javascript",
      img: js,
      aosDelay: 0,
    },
    {
      name: "CSS",
      img: css,
      aosDelay: 50,
    },
    {
      name: "HTML",
      img: html,
      aosDelay: 100,
    },
    {
      name: "React",
      img: react,
      aosDelay: 150,
    },
    {
      name: "TailwindCSS",
      img: tailwind,
      aosDelay: 200,
    },
    {
      name: "Bootstrap",
      img: bootstrap,
      aosDelay: 250,
    },
  ];
  return (
    <section className="skills section-padding" id="skills">
      <ContainerLayout>
        <SectionTitle title="Skills" subTitle="IT Skills that i comprehend" />
        <Grid
          style={{
            gridTemplateColumns: "repeat(10, 1fr)",
          }}
        >
          {DATA_SKILLS.map((skill) => (
            <div
              className="skills-item"
              data-aos="flip-left"
              data-aos-delay={skill.aosDelay}
              key={skill.name}
            >
              <div className="img-box">
                <img src={skill.img} alt={skill.name} />
              </div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </Grid>
      </ContainerLayout>
    </section>
  );
}
export default Skills;
