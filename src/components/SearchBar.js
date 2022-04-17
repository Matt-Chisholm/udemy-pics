import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {term: ''}

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);

  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui icon input field">
            <input
              className="search-bar"
              type="text"
              placeholder="Search..."
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value})}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
