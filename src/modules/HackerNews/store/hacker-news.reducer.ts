import {
	FETCH_STORYIDS_SUCCESS,
	FETCH_STORIES_SUCCESS,
} from '../types/actionEnums'
import { HackerNewsActionTypes } from '../types/actions'
import ModuleState from '../types/moduleState'

const initialState: ModuleState['HackerNews'] = {
	storyIds: [],
	stories: [],
}

export default (
	state: ModuleState['HackerNews'] = initialState,
	action: HackerNewsActionTypes
) => {
	switch (action.type) {
		case FETCH_STORYIDS_SUCCESS:
			return { ...state, storyIds: action.payload }
		case FETCH_STORIES_SUCCESS:
			return { ...state, stories: [...state.stories, ...action.payload] }
		default:
			return state
	}
}
