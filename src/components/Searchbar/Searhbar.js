import { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import { MdImageSearch } from "react-icons/md";
import s from "./Searchbar.module.scss";

class Searchbar extends Component {
  state = {
    query: "",
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleQueryChange = (event) => {
    this.setState({ query: event.target.value.toLowerCase() });
  };

  handleQuerySubmit = (event) => {
    event.preventDefault();
    const { query } = this.state;

    if (query.trim() === "") {
      return toast.info("Please, make your choice!", {
        icon: "🚀",
      });
    }

    this.props.onSubmit(query);

    this.setState({ query: "" });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleQuerySubmit}>
          <button type="submit" className={s.Button}>
            <MdImageSearch />
            <span className={s.ButtonLabel}>Search</span>
          </button>
          <input
            className={s.Input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleQueryChange}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
