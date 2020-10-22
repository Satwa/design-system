import Button from '../components/button'
import InputBox from '../components/inputBox'
import React from 'react'
import Router from 'next/router'

export default function SignIn() {
	const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i

	const [emailError, setEmailError] = React.useState(false)
	const [emailErrorMessage, setEmailErrorMessage] = React.useState(false)

	const _onFormSubmit = (ev) => {
		ev.preventDefault()

		const fields = document.querySelectorAll('form input')

		if(!emailRegex.test(fields[0].value)) {
			setEmailErrorMessage('Adresse e-mail invalide.')
			setEmailError(true)
		} else {
			Router.push('/')
		}
	}

	return (
		<main>
			<h1>Sign in</h1>
			<span className='logoSmall'>🧠</span>
			<Button to='/signup' inline>
				Do not have an account yet? Register
			</Button>

			<form method='POST' onSubmit={_onFormSubmit}>
				<InputBox name='email' type='email' showError={emailError} onChange={() => setEmailError(false)} errorMessage={emailErrorMessage} required>Email</InputBox>
				<InputBox name='password' type='password' required>Password</InputBox>

				<Button to='/password-reset' inline>
					Forgot password?
				</Button>
				<Button submit>
					Sign in
				</Button>
			</form>
		</main>
	)
}
