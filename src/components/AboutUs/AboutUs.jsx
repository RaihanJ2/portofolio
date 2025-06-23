import style from "./AboutUs.module.css";
import SectionTitle from "../Layout/SectionTitle";

function AboutUs() {
  return (
    <section className={style.about} id="about">
      <div className={style.aboutText}>
        <SectionTitle title="about us" subTitle="Web Developer" />
        <p data-aos="fade-up" data-aos-duration="600">
          Hello! I am Raihan Jan&apos;smaillendra An enthusiastic full-stack
          developer graduated in Software Engineering from Esa Unggul
          University. I&apos;m good at making things look nice, and easy to use.
          I am driven by curiosity, creativity and the pursuit of lifelong
          learning in my work. Whether I am coding new features, diving
          headfirst into the hottest tech, or just fiddling with some clever
          concepts, I am constantly pursuing new ideas, and pushing myself
          beyond what is typical in web development.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
