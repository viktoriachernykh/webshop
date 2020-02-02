import React, { Component } from "react";

export default class Search extends Component {
  state = { keyword: "" };

  onSubmit = event => {
    event.preventDefault();
    // console.log("this.state.keyword", this.state.keyword); // returns keyword from input
    this.props.searchProducts(this.state.keyword);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            Search:
            <input
              type="text"
              name="keyword"
              onChange={this.onChange}
              value={this.state.keyword}
            />
          </label>
          <input type="submit" value="Search!" />
        </form>
      </div>
    );
  }
}
