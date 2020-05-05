import React, { useEffect, useState } from 'react';
import moment from 'moment';

import './App.scss';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

const API_URL = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';

const SORTS = [
  { 
    label: 'Nome',
    sortKey: 'name',
    sort: () => {}
  },
  { 
    label: 'País',
    sortKey: 'country',
    sort: () => {}
  },
  { 
    label: 'Empresa',
    sortKey: 'company',
    sort: () => {}
  },
  { 
    label: 'Departamento',
    sortKey: 'department',
    sort: () => {}
  },
  { 
    label: 'Data de admissão',
    sortKey: 'admissionDate',
    sort: () => {}
  },
]

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [sortKey, setSortKey] = useState('')
  const [query, setQuery] = useState('')

  const onSort = sortKey => {
    setSortKey(sortKey)
  }

  const filterByName = query => setQuery(query)

  useEffect(() => {    
    
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        data.forEach(contact => contact.admissionDate = moment(contact.admissionDate).format('DD-MM-YYYY'))
        setContacts(data)
      })
      .catch(err => console.error(err))
    
  }, [])

  const filteredContacts = query ? contacts.filter(
    contact => contact.name.toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  ) : contacts

  return (
    <>
      <Topbar/>

      <div className="container">
        <Filters 
          sorts={SORTS} 
          sortKey={sortKey} 
          onSort={onSort}
          filterByName={filterByName}/>
      </div>

      <div className="container">
        <Contacts contacts={filteredContacts}/>        
      </div>
    </>
  )

}

export default App;
