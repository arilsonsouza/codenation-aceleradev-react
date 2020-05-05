import React, { useState, useEffect } from 'react';

import './styles.scss';
import Sort from '../Sort'

const SORTS = [
	{ 
		label: 'Nome',
		sortKey: 'name'    
	},
	{ 
		label: 'País',
		sortKey: 'country'    
	},
	{ 
		label: 'Empresa',
		sortKey: 'company'    
	},
	{ 
		label: 'Departamento',
		sortKey: 'department'    
	},
	{ 
		label: 'Data de admissão',
		sortKey: 'admissionDate'    
	},
];

const Filters = ({ sortKey, onSort, filterByName = () => {} }) => {
	const [searchQuery, setSearchQuery] = useState('')

	useEffect(() => {
		filterByName(searchQuery)
	}, [searchQuery])

	return (
		<div className="container" data-testid="filters">
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

				{SORTS.map(sort => (
					<Sort 
						currentSortKey={sortKey} 
						key={sort.sortKey} 
						{...sort} 					
						onSort={onSort}/>
				))}
			</section>
		</div>
	);
}
export default Filters;
