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
	const [usersFetched, setUsersFetched] = useState(0);	
	
	const getUserPostById = (userId) => users.find(user => user.id === userId);

	const fetchUsers = async ()  => {	
		const  data  = await UsersService.getUsers();
		setUsers(data);
	}
	
	const fetchUsersPost = async () => {
		if (usersFetched === users.length) {
			return;
		}

		const userPosts = await UsersService.getUserPosts(users[usersFetched].id);
		setPosts([...posts, ...userPosts]);
		setUsersFetched(usersFetched + 1);
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

	useEffect(() => {
		fetchUsersPost();
	}, [users, usersFetched]);

  return (
    <div data-testid="feed-route">
			{(users.length > 0 && stories.length > 0) && (
				<Stories
					stories={stories}
					getUserHandler={getUserPostById}
				/>
			)}

    	{users.length !== usersFetched 
    		? <Loading/> 
    		: <Posts
						posts={posts}
						getUserHandler={getUserPostById}
    			/>
    	}

    </div>
  );
};

export default FeedRoute;
