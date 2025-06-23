import style from "./FirstScreen.module.css";
import homeImg from "../../assets/img/profile.png";

import Grid from "../Layout/Grid";
import ContainerLayout from "../Layout/ContainerLayout";
import { ButtonLink } from "../Layout/Button";

function FirstScreen() {
  return (
    <section className={style.home} id="home">
      <ContainerLayout>
        <Grid>
          <div className={style.homeText}>
            <h1 data-aos="fade-left" data-aos-duration="1000">
              👋 Hello! I&apos;m Raihan Jan&apos;smaillendra{" "}
              <span>Web Developer</span>
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="150"
              className={style.textDesc}
            >
              I&apos;m a web developer who enjoys turning ideas into real,
              user-friendly digital experiences. When I&apos;m not coding,
              you&apos;ll find me exploring new tech or diving into comics.
            </p>
            <ButtonLink
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="300"
              href="#about"
            >
              Know More
            </ButtonLink>
          </div>
          <div className={style.homeImg}>
            <div
              className={style.container}
              data-aos="zoom-out"
              data-aos-duration="1000"
            >
              <img
                src={homeImg}
                alt="img"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </Grid>
      </ContainerLayout>
    </section>
  );
}
export default FirstScreen;
