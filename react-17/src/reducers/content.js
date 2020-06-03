import { ContentConstants } from '../constants'

const initialState = {
	categories: [],
  playlists: [],
  tracks: [],
  playingNowId: null,
  playingNowTrack: null,
  playerHeight: 0,
  status: 'idle',
  errorMessage: '',
}

const contentReducer = (state = initialState, action) => {
	return state
}

export default contentReducer