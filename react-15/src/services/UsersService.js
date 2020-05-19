import Service from './Service';

class UsersService extends Service {
	static getUsers () {
		return this.get('users');
	}

	static getProfileData (username) {
		return this.get(`users?search=${username}`);
	}

	static getUserPosts (userId) {
		return this.get(`users/${userId}/posts`);
	}

	static getStories () {
		return this.get('stories');
	}
}

export default UsersService;