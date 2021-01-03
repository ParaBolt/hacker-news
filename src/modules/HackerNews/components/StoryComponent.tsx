import React, { Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import styled from 'styled-components'
import Story from '../types/story'

interface Props {
	story: Story
}

const StyledLink = styled(Link)`
	&:hover {
		text-decoration: none;
	}
`

const StoryComponent: React.FC<Props> = (props: Props) => {
	const { story } = props
	return (
		<>
			<StyledLink href={story.url} rel="noopener noreferrer" target="blank">
				<Card>
					<CardActionArea>
						<CardContent>
							<Typography variant="h5" component="h2">
								{story.title}
							</Typography>
							<Typography>
								<Grid container spacing={3}>
									<Grid item>{story.score} points</Grid>
									<Grid item>by {story.by}</Grid>
									<Grid item>{story.descendants} comments</Grid>
								</Grid>
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</StyledLink>
		</>
	)
}

export default StoryComponent
