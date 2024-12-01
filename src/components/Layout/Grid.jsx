import PropTypes from "prop-types";

/**
 *
 * @param {*} props
 * @param {React.CSSProperties} props.style
 * @returns
 */

function Grid(props) {
  const { style, children } = props;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: "30px",
        ...style,
      }}
      className="grid"
    >
      {children}
    </div>
  );
}

Grid.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
};

export default Grid;
