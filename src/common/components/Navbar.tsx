import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

export const Navbar: React.FC = () => (
	<>
		<AppBar position="static">
			<Toolbar>
				<nav>
					<Button color="inherit" component={Link} to="/hacker-news">
						Hacker News
					</Button>
					<Button color="inherit" component={Link} to="/login">
						Login
					</Button>
				</nav>
			</Toolbar>
		</AppBar>
	</>
)
