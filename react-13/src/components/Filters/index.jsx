import React, { useState, useEffect } from 'react';

import './styles.scss';
import Sort from '../Sort'

const Filters = ({ sorts, sortKey, onSort, filterByName }) => {
	const [searchQuery, setSearchQuery] = useState('')

	useEffect(() => {
		filterByName(searchQuery)
	}, [searchQuery])
	
	return (
		<section className="filters">
			<div className="filters__search">
				<input 
					type="text" 
					className="filters__search__input" 
					placeholder="Pesquisar" 
					onChange={e => setSearchQuery(e.target.value)}
					/>

				<button className="filters__search__icon">
					<i className="fa fa-search"/>
				</button>
			</div>

			{sorts.map(sort => (
				<Sort currentSortKey={sortKey} key={sort.sortKey} {...sort} onSort={onSort}/>
			))}
		</section>
	);
}
export default Filters;
