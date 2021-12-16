import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import s from "./Modal.module.scss";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  state = {
    loading: false,
  };

  static propTypes = {
    loading: PropTypes.bool,
  };

  componentDidMount() {
    this.setState({ loading: true });
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code !== "Escape") {
      return;
    }

    this.props.onClose();
  };

  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  handleImageLoaded = () => {
    this.setState({ loading: false });
  };

  render() {
    const { src, alt } = this.props;

    return createPortal(
      <div onClick={this.handleBackdropClick} className={s.Overlay}>
        <div className={s.Modal} onLoad={this.handleImageLoaded}>
          <img className={s.Image} src={src} alt={alt}></img>
        </div>
      </div>,
      modalRoot
    );
  }
}
