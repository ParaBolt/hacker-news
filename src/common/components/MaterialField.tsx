import TextField from '@material-ui/core/TextField'
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form'

interface ReduxFormComponentProps {
	input: WrappedFieldInputProps
	meta: WrappedFieldMetaProps
	label: string
}

const MaterialField: React.FC<ReduxFormComponentProps> = ({
	label,
	input,
	meta: { touched, invalid, error },
	...custom
}: ReduxFormComponentProps) => (
	<TextField
		label={label}
		placeholder={label}
		error={touched && invalid}
		helperText={touched && error}
		{...input}
		{...custom}
	/>
)

export default MaterialField
