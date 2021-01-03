import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { actionTypes, selectors } from '../store'
import { FetchStoriesAction } from '../types/actions'
import StoryComponent from './StoryComponent'
import { Loader } from '../../../common/components/Loader'

const StyledInfiniteScroll = styled(InfiniteScroll)`
	display: grid;
	gap: 1em;
	padding: 1em;
`

const HackerNews: React.FC = () => {
	const storyIds = useSelector(selectors.getRecords)
	const stories = useSelector(selectors.getStories)
	const hasMoreStories = useSelector(selectors.hasMoreStories)
	const dispatch = useDispatch()
	const [page, setPage] = useState(0)
	const itemsPerPage = 15

	function fetchStories() {
		dispatch({
			type: actionTypes.FETCH_STORIES,
			payload: storyIds.slice(page * itemsPerPage, (page + 1) * itemsPerPage),
		} as FetchStoriesAction)
		setPage(page + 1)
	}

	function renderStories() {
		return stories.map((story: any) => (
			<StoryComponent key={story.id} story={story} />
		))
	}

	useEffect(() => {
		dispatch({ type: actionTypes.FETCH_STORYIDS })
	}, [])

	useEffect(() => {
		if (storyIds.length) fetchStories()
	}, [storyIds])

	return (
		<>
			<Typography variant="h4" component="h1" gutterBottom>
				Hacker News
			</Typography>
			<StyledInfiniteScroll
				dataLength={stories.length}
				next={fetchStories}
				hasMore={hasMoreStories}
				loader={<Loader />}
			>
				{renderStories()}
			</StyledInfiniteScroll>
		</>
	)
}

export default HackerNews
