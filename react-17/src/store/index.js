import { createStore } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

import { UserConstants } from '../constants'

import appReducers from '../reducers'

const rootReducer = (state, action) => {
	if (action.type === UserConstants.USER_LOGOUT) {
		state = undefined
	}

	return appReducers(state, action)
}

const persitConfig = {
	key: 'spotifyStorage',
	storage,
	blacklist: ['auth', 'content']
}

const persistedReducer = persistReducer(persitConfig, rootReducer)

const store = createStore(
	persistedReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const persistor = persistStore(store)

export { store, persistor}
