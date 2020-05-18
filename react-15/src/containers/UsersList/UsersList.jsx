import React from 'react';
import { Link } from 'react-router-dom';

import User from '../../components/User';
import Loading from '../../components/Loading';

import './UsersList.scss';

const UersList = ({ users }) => {
  return (
    <section className="users-list" data-testid="user-list">
    	{users.length > 0 ? 
    	 users.map((user, index) => {
    		return (
    			<User
						key={user.id}
						infoUser={user}	
    			/>
    		)
    	}) : <Loading/> }
    </section>
  )
};

export default UersList;
