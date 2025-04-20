import { useRef, useState } from "react";
import ContainerLayout from "../Layout/ContainerLayout";
import SectionTitle from "../Layout/SectionTitle";
import { InputBox, TextAreaBox } from "../Layout/Form";
import { Button } from "../Layout/Button";
import "./style.css";
import Grid from "../Layout/Grid";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
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
    setStatus({ submitting: true, success: false, error: false, message: "" });

    // You need to replace these with your actual EmailJS service, template and user IDs
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus({
            submitting: false,
            success: true,
            error: false,
            message: "Message sent successfully!",
          });
          // Reset form
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus({
            submitting: false,
            success: false,
            error: true,
            message: "Failed to send message. Please try again.",
          });
        }
      );
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
              <p>Kota Tangerang, Banten, Indonesia</p>
            </div>
            <div
              className="contact-info-item"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <i className="fas fa-phone"></i>
              <h3>Call us</h3>
              <p>+62 8782 0983 999</p>
            </div>
            <div
              className="contact-info-item"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <i className="fas fa-envelope"></i>
              <h3>Email us</h3>
              <p>raihanjansmaillendra.rjs@gmail.com</p>
            </div>
          </div>
          <div
            className="contact-form"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <form ref={form} onSubmit={handleSubmit}>
              <InputBox
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <InputBox
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <InputBox
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <TextAreaBox
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              {status.success && (
                <div className="success-message">{status.message}</div>
              )}

              {status.error && (
                <div className="error-message">{status.message}</div>
              )}

              <Button type="submit" disabled={status.submitting}>
                {status.submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </Grid>
      </ContainerLayout>
    </section>
  );
}

export default Contact;
