import React, { useState } from 'react';

const Sort = ({ label, sortKey, currentSortKey, onSort}) => {
  const [ascending, setAscending] = useState(false)
  const handleClick = () => {
    const isAscending = ( sortKey === currentSortKey) ? !ascending : true
    setAscending(isAscending)
    onSort(sortKey, isAscending)
  }
  
  return (
    <button 
      onClick={handleClick}
      className={`filters__item ${currentSortKey === sortKey ?  'is-selected': null}`}>
      {label} <i className={`fas fa-sort-${( currentSortKey === sortKey && ascending) ? 'up': 'down'}`} />
    </button>
  )
}

export default Sort