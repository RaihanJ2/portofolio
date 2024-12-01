import ContainerLayout from "../Layout/ContainerLayout";
import SectionTitle from "../Layout/SectionTitle";
import { InputBox, TextAreaBox } from "../Layout/Form";
import { Button } from "../Layout/Button";
import "./style.css";
import Grid from "../Layout/Grid";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="contact section-padding" id="contact">
      <ContainerLayout>
        <SectionTitle
          title="Contact"
          subTitle="Contact us for further information"
        />
        <Grid className="contact-grid">
          <div className="contact-info">
            <div
              className="contact-info-item"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <i className="fas fa-map-marker-alt"></i>
              <h3>Address</h3>
              <p>Padang, Sumatera Barat, Indonesia</p>
            </div>
            <div
              className="contact-info-item"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <i className="fas fa-phone"></i>
              <h3>Call us</h3>
              <p>+62 8332 232 ***</p>
            </div>
            <div
              className="contact-info-item"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <i className="fas fa-envelope"></i>
              <h3>Email us</h3>
              <p>example@gmail.com</p>
            </div>
          </div>
          <div
            className="contact-form"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <form action="" onSubmit={handleSubmit}>
              <InputBox
                name="name"
                placeholder="name"
                onChange={handleChange}
              />
              <InputBox
                name="email"
                type="email"
                placeholder="email"
                onChange={handleChange}
              />
              <InputBox
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
              />
              <TextAreaBox placeholder="Message" onChange={handleChange} />
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </Grid>
      </ContainerLayout>
    </section>
  );
}

export default Contact;
