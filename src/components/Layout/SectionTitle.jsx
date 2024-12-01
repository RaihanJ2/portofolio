import PropTypes from "prop-types";
import "./style.css";

function SectionTitle({ title = "title", subTitle = "sub title" }) {
  return (
    <div className="section-title">
      <span className="title" data-aos="fade-up" data-aos-duration="600">
        {title}
      </span>
      <h2 className="sub-title" data-aos="fade-up" data-aos-duration="600">
        {subTitle}
      </h2>
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default SectionTitle;
