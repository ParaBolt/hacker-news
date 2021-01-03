import {
	FETCH_STORYIDS,
	FETCH_STORIES,
	FETCH_STORYIDS_SUCCESS,
	FETCH_STORIES_SUCCESS,
} from './actionEnums'
import Story from './story'

export interface FetchStoryIdsAction {
	type: typeof FETCH_STORYIDS
}

export interface FetchStoryIdsSuccessAction {
	type: typeof FETCH_STORYIDS_SUCCESS
	payload: number[]
}

export interface FetchStoriesAction {
	type: typeof FETCH_STORIES
	payload: number[]
}

export interface FetchStoriesSuccessAction {
	type: typeof FETCH_STORIES_SUCCESS
	payload: Story[]
}

export type HackerNewsActionTypes =
	| FetchStoryIdsSuccessAction
	| FetchStoriesSuccessAction
