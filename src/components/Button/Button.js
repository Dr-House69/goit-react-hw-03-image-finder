import PropTypes from "prop-types";
import s from "./Button.module.scss";

const Button = ({ handleClick }) => {
  return (
    <button type="button" onClick={handleClick} className={s.Button}>
      Load more ...
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Button;
