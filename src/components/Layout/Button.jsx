import PropTypes from "prop-types";
import "./style.css";

export const Button = (props) => {
  const { children, ...restProps } = props;
  return <button {...restProps}>{children}</button>;
};

export const ButtonLink = (props) => {
  const { children, href, ...restProps } = props;
  return (
    <button {...restProps}>
      <a href={href}>{children}</a>
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
  href: PropTypes.string,
  restProps: PropTypes.any,
};

ButtonLink.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
  href: PropTypes.string,
  restProps: PropTypes.any,
};
