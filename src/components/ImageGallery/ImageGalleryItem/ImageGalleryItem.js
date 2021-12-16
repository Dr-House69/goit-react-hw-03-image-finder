import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.scss";

function ImageGalleryItem({ tags, src, largeImageURL, openModal }) {
  return (
    <li className={s.GalleryItem} onClick={openModal}>
      <img
        src={src}
        alt={tags}
        data-largeimg={largeImageURL}
        className={s.Image}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func,
};

export default ImageGalleryItem;
