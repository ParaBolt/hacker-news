import axios, { AxiosPromise, AxiosResponse } from 'axios'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import {
	FETCH_STORYIDS,
	FETCH_STORYIDS_SUCCESS,
	FETCH_STORIES,
	FETCH_STORIES_SUCCESS,
} from '../types/actionEnums'
import Story from '../types/story'
import {
	FetchStoriesAction,
	FetchStoryIdsSuccessAction,
} from '../types/actions'

const ROOT_URL = 'https://hacker-news.firebaseio.com/v0/'

function* fetchNews() {
	function getTopStories(): AxiosPromise<number[]> {
		return axios.get(`${ROOT_URL}topstories.json`)
	}

	try {
		const result: AxiosResponse<number[]> = yield call(getTopStories)
		yield put({
			type: FETCH_STORYIDS_SUCCESS,
			payload: result.data,
		} as FetchStoryIdsSuccessAction)
	} catch (error) {
		//
	}
}

function* fetchStories(action: FetchStoriesAction) {
	function getStory(id: number): AxiosPromise<Story> {
		return axios.get(`${ROOT_URL}item/${id}.json`)
	}

	function fetchMultipleStories(
		ids: number[]
	): Promise<AxiosResponse<Story>[]> {
		return Promise.all(ids.map(getStory))
	}

	try {
		const result: AxiosResponse<Story>[] = yield call(
			fetchMultipleStories,
			action.payload
		)
		yield put({
			type: FETCH_STORIES_SUCCESS,
			payload: result.flatMap((entry) => entry.data),
		})
	} catch (error) {
		//
	}
}

function* watchFetchNews() {
	yield takeEvery(FETCH_STORYIDS, fetchNews)
}

function* watchFetchStory() {
	yield takeEvery(FETCH_STORIES, fetchStories)
}

export default function* sagas() {
	yield all([watchFetchNews(), watchFetchStory()])
}
