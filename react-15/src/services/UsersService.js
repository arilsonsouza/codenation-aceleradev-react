import Service from './Service';

class UsersService extends Service {
	static getUsers () {
		return this.get('users');
	}

	static getStories () {
		return this.get('stories');
	}
}

export default UsersService;