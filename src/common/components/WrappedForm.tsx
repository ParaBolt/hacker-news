import React from 'react'
import { reduxForm } from 'redux-form'

const ContactForm: any = (props: any) => {
	const { handleSubmit, children } = props
	return <form onSubmit={handleSubmit}>{children}</form>
}

const BoundContactForm = reduxForm({})(ContactForm)

export default BoundContactForm
