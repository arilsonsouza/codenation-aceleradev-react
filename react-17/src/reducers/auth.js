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
	const { type, payload } = action
	switch (type) {
		case AuthConstants.AUTH_CALLBACK_ERROR:
			return {
				...state,
				accessToken: '',
				errorMessage: payload,
				expirationTime: '',
				expiresIn: '',
				isLogged: false,
				tokenType: ''
			}
		case AuthConstants.AUTH_CALLBACK_SUCCESS:
			return {
				...state,
				accessToken: payload.accessToken,
				errorMessage: '',
				expirationTime:  new Date().getTime() + parseInt(payload.expiresIn),
				expiresIn: payload.expiresIn,
				isLogged: true,
				tokenType: payload.tokenType
			}
		default:
			return state
	}
	
}

export default authReducer