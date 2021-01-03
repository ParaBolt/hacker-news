export default interface Story {
	readonly by: string
	readonly descendants: number
	readonly id: number
	readonly kids: number[]
	readonly score: number
	readonly time: number
	readonly title: string
	readonly type: string
	readonly url: string
}
