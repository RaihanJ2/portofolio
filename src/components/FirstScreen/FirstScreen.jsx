import style from "./FirstScreen.module.css";
import homeImg from "../../assets/img/home-img1.png";

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
              Hello! I&apos;m John Doe <span>Web Developer</span>
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="150"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              ipsum tempora minima voluptatibus facere et saepe quaerat nostrum
              pariatur ducimus!
            </p>
            <ButtonLink
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="300"
              href="#about"
              className=""
            >
              know more
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
