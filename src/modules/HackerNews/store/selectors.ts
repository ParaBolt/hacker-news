import ModuleState from '../types/moduleState'

export const getRecords = (state: ModuleState) => state.HackerNews.storyIds
export const getStories = (state: ModuleState) => state.HackerNews.stories
export const hasMoreStories = (state: ModuleState) =>
	state.HackerNews.storyIds.length > state.HackerNews.stories.length
