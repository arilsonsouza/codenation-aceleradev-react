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
]

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [sortKey, setSortKey] = useState('')
  const [isAscending, setIsAscending] = useState(false)
  const [query, setQuery] = useState('')

  const upward = (a, b, key) => {
    if ( a[key] < b[key] ){
      return -1;
    }
    return 0;
  }

  const downward  = (a, b, key) => {
    if ( b[key] < a[key] ){
      return -1;
    }
    return 0;
  }
  
  const sortBy = (key, array, ascending) => {      
    if (key === 'admissionDate') {
      return array.sort((a, b) => {
        a[key] = moment(a[key])
        b[key] = moment(b[key])

        return ascending ? upward(a, b, key) : downward(a, b, key)
      });
    }
    return array.sort((a, b) => {       
        a[key].toLowerCase()
        b[key].toLowerCase()
        return ascending ? upward(a, b, key) : downward(a, b, key)
    });
  }

  const onSort = (key, ascending) => {
    const sortedContacts = sortBy(key, contacts, ascending)
    setIsAscending(ascending)
    setContacts(sortedContacts)   
    setSortKey(key)   
  }

  const filterByName = query => setQuery(query)  

  useEffect(() => {    
    
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {        
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
