import React from 'react';

const Sort = ({ label, sortKey, currentSortKey, onSort}) => (
  <button 
    onClick={() => onSort(sortKey)}
    className={`filters__item ${currentSortKey === sortKey ?  'is-selected': null}`}>
    {label} <i className="fas fa-sort-down" />
  </button>
)

export default Sort