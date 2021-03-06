import React, { useState, useEffect } from 'react';

import UsersList from '../../containers/UsersList/UsersList';

import { UsersService } from '../../services';

const UsersRoute = () => {
	const [users, setUsers] = useState([]);

	const fetchUsers = async ()  => {	
		const  data  = await UsersService.getUsers();
		setUsers(data);
	}

	useEffect(() => {
		fetchUsers();
	}, []);

  return (
    <div className="container" data-testid="users-route">
    <UsersList users={users}/>
    </div>
  );
};

export default UsersRoute;
