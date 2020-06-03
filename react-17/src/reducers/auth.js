import { AuthConstants } from '../constants'

const initialState = {
	accessToken: '',
	errorMessage: '',
	expirationTime: '',
	expiresIn: '',
	isLogged: false,
	tokenType: ''
}

const authReducer = (state = initialState, action) => {

	return state
}

export default authReducer