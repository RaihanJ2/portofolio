import "./style.css";

export const InputBox = ({ ...props }) => {
  return (
    <div className="input-box">
      <input
        name=""
        type="text"
        className="input-control"
        required
        {...props}
      />
    </div>
  );
};

export const TextAreaBox = ({ ...props }) => {
  return (
    <div className="input-box">
      <textarea
        name="message"
        className="input-control"
        placeholder="Message"
        required
        {...props}
      />
    </div>
  );
};
