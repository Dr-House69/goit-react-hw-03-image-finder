import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import API from "./services/imageApi";
import Searchbar from "./components/Searchbar/Searhbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Spinner from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import s from "./App.module.scss";

class App extends Component {
  state = {
    query: "",
    images: [],
    page: 1,
    isLoading: false,
    openModal: false,
    modalImage: "",
    alt: "",
    error: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchImage();
    }
  }

  onSearch = (query) => {
    this.setState({ query, images: [], page: 1, error: null });
  };

  fetchImage = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });

    API.fetchImages(query, page)
      .then(({ hits }) => {
        if (hits.length === 0) {
          return toast.error(`Not found for ${query}?!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        this.setState(({ images, page }) => ({
          images: [...images, ...hits],
          page: page,
        }));
      })
      .catch((error) => this.setState({ error: "Please, try again!" }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
    this.onScroll();
  };

  onScroll = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.clientHeight,
        behavior: "smooth",
      });
    }, 1000);
  };

  onOpenModal = (e) => {
    e.preventDefault();
    this.setState({
      openModal: true,
      modalImage: e.target.dataset.largeimg,
      alt: e.target.alt,
    });
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    const { images, isLoading, openModal, modalImage, alt, error } = this.state;

    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.onSearch} />
        {isLoading && <Spinner />}
        {images.length > 0 && !error && (
          <>
            <ImageGallery openModal={this.onOpenModal} images={images} />
            <Button handleClick={this.onLoadMore} />
          </>
        )}
        {openModal && (
          <Modal onClose={this.onCloseModal} src={modalImage} alt={alt} />
        )}
        {error && <p className={s.error}>{error}</p>}
        <ToastContainer autoClose={3000} theme={"dark"} />
      </div>
    );
  }
}
export default App;
