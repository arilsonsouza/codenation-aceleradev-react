import { UserConstants } from '../constants/'

const initialState = {
	email: '',
	errorMessage: '',
	name: '',
	status: 'idle',
	thumb: ''
}

const userReducer = (state = initialState, action) => {
	return state
} 

export default userReducer