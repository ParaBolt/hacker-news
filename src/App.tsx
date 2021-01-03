import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '@material-ui/core'

import { Navbar } from './common/components/Navbar'
import modules from './modules'

import './index.css'
import { Loader } from './common/components/Loader'

const StyledContainer = styled(Container)`
	padding-block: 3em;
`

const App: React.FC = () => (
	<BrowserRouter>
		<Navbar />
		<StyledContainer>
			<Suspense fallback={<Loader />}>
				<Switch>
					{modules.map((module) => (
						<Route
							key={module.key}
							path={module.path}
							component={module.component}
						/>
					))}
				</Switch>
			</Suspense>
		</StyledContainer>
	</BrowserRouter>
)

export default App
