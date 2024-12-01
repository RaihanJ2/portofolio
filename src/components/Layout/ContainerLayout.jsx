import PropTypes from "prop-types";

function ContainerLayout(props) {
  const { style, children } = props;
  return (
    <div
      style={{
        maxWidth: "1170px",
        margin: "auto",
        padding: "0 15px",
        ...style,
      }}
      id="container-layout"
    >
      {children}
    </div>
  );
}

ContainerLayout.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
};

export default ContainerLayout;
