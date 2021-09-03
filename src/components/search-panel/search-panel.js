import React from 'react';
import ItemStatusFilter from '../item-status-filter/';
import './search-panel.css';

const SearchPanel = () => {
  return (
    <div className="search-label">
      <input className="search-input form-control" placeholder="search" />
      <ItemStatusFilter />
    </div>

  );
}

export default SearchPanel;