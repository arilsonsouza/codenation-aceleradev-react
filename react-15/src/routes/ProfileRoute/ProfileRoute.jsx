import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

import { UsersService } from '../../services';


const ProfileRoute = ({ match: { params: { username }} }) => {
	const [user, setUser] = useState(null);
	const [posts, setPosts] = useState([]);

	const [loadingUserPosts, setLoadingUserPosts] = useState(false);

	const fetchUserData = async () => {
		const userData = await UsersService.getProfileData(username);
		setUser(userData[0]);
	};

	const fetchUserPosts = async () => {
		setLoadingUserPosts(true);
		const userPosts = await UsersService.getUserPosts(user.id);
		setPosts(userPosts);
		setLoadingUserPosts(false);
	};



	useEffect(() => {
		fetchUserData()
	}, [username]);

	useEffect(() => {
		if (user) {
			fetchUserPosts();
		}
	}, [user]);

  return (
    <div data-testid="profile-route">
    	{user && <UserProfile {...user}/>}
			{loadingUserPosts
				? <Loading/>
				: <UserPosts posts={posts}/>
			}
    </div>
  );
};

export default ProfileRoute;
