import React from 'react'
import styled from 'styled-components'
import { Field } from 'redux-form'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import WrappedForm from '../../../common/components/WrappedForm'
import MaterialField from '../../../common/components/MaterialField'

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1;
	gap: 2em;
`

const LoginPage: React.FC = () => {
	const submit = (values: any) => values
	return (
		<>
			<WrappedForm form="login" onSubmit={submit}>
				<Grid>
					<Typography variant="h4" component="h1">
						Login
					</Typography>
					<Field
						name="username"
						component={MaterialField}
						label="Username"
						fullWidth
					/>
					<Field
						name="password"
						component={MaterialField}
						type="password"
						label="Password"
						fullWidth
					/>
					<Button variant="contained" color="primary" type="submit">
						Submit
					</Button>
				</Grid>
			</WrappedForm>
		</>
	)
}

export default LoginPage
