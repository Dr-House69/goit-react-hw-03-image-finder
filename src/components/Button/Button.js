import PropTypes from "prop-types";
import s from "./Button.module.scss";

const Button = ({ fetchImages }) => {
  return (
    <button type="button" onClick={fetchImages} className={s.Button}>
      Load more ...
    </button>
  );
};

Button.propTypes = {
  fetchImages: PropTypes.func,
};

export default Button;
