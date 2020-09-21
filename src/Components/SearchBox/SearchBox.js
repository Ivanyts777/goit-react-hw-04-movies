import React, { Component } from "react";
import styles from "./SearchBox.module.css";

class SearchBox extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <input
            className={styles.searchInput}
            type="text"
            autoComplete="off"
            value={value}
            onChange={this.handleChange}
            autoFocus
            placeholder="Search movie..."
          />
          <button className={styles.form__btn} type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
