import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';
import { UsersService } from '../../services';

const FeedRoute = () => {
	const [users, setUsers] = useState([]);
	const [posts, setPosts] = useState([]);
	const [stories, setStories] = useState([]);
	const [loading, setLoading] = useState(false);

	const getUserPostById = (userId) => users.find(user => user.id === userId);

	const fetchUsers = async ()  => {	
		setLoading(true)	;
		const  data  = await UsersService.getUsers();
		setUsers(data);
		setLoading(false);
	}
	
	const fetchUsersPost = () => {
		users.forEach(async (user) => {
			
		})
	}

	const fetchStories = async () => {
		const stories = await UsersService.getStories();
		setStories(stories);
	}
	
	useEffect(() => {
		fetchUsers();
	}, []);

	useEffect(() => {
		fetchStories();
	}, []);

  return (
    <div data-testid="feed-route">
			{(users.length > 0 && stories.length > 0) && (
				<Stories
					stories={stories}
					getUserHandler={getUserPostById}
				/>
			)}

    	{ loading && <Loading/> }

    </div>
  );
};

export default FeedRoute;
