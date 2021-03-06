import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    term: ''
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };
  render() {
    return (
      <div className="search-label" >
        <input type="text"
          className="search-input form-control"
          placeholder="search"
          value={this.state.term}
          onChange={this.onSearchChange} />
      </div>

    );
  }
}
