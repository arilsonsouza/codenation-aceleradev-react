const API_URL = 'https://5e7d0266a917d70016684219.mockapi.io/api/v1';

class Service {
	static async get(endpoint, params = {}) {
		const response = await fetch(`${API_URL}/${endpoint}`);
		const data = await response.json();
		return data
	}	
}

export default Service;