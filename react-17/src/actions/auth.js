import { AuthConstants } from '../constants'

export const authCallbackSuccess = (credentials) => ({
	type: AuthConstants.AUTH_CALLBACK_SUCCESS,
	payload: { ...credentials }
})

export const authCallbackError = (errorMessage) => ({
	type: AuthConstants.AUTH_CALLBACK_ERROR,
	payload: errorMessage
})