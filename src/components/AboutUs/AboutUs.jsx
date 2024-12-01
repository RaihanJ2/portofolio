import style from "./AboutUs.module.css";
import aboutImg from "../../assets/img/about-img.png";
import Grid from "../Layout/Grid";
import SectionTitle from "../Layout/SectionTitle";

function AboutUs() {
  return (
    <section className={style.about} id="about">
      <div className={style.container}>
        <Grid>
          <div className={style.aboutImg}>
            <div
              className={style.imgBox}
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img src={aboutImg} alt="about" />
              <div className={`${style.box} ${style.box1}`}>
                <span>2.5k</span>
                <p>satiesfied clients</p>
              </div>
            </div>
          </div>
          <div className={style.aboutText}>
            <SectionTitle
              title="about us"
              subTitle="we-re cleaning since 2010"
            />
            <p data-aos="fade-up" data-aos-duration="600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              placeat, nesciunt ut molestias mollitia veritatis. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Dolorem placeat,
              nesciunt ut molestias mollitia veritatis.
            </p>
          </div>
        </Grid>
      </div>
    </section>
  );
}

export default AboutUs;
