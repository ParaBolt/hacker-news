import Story from './story'

export default interface ModuleState {
	HackerNews: {
		readonly storyIds: number[]
		readonly stories: Story[]
	}
}
