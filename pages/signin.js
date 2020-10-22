import Button from '../components/button'
import InputBox from '../components/inputBox'
import styles from '../styles/Home.module.scss'
import React from 'react'

export default function SignIn() {
	const [emailError, setEmailError] = React.useState(false)
	const [emailErrorMessage, setEmailErrorMessage] = React.useState(false)

	const _onFormSubmit = (ev) => {
		ev.preventDefault()

		const fields = document.querySelectorAll('form input')

		if(!emailRegex.test(fields[0].value)) {
			setEmailErrorMessage('Adresse e-mail invalide.')
			setEmailError(true)
		}
	}

	return (
		<div className={styles.container}>
			<h1>Sign In</h1>

			<p>
				Not signed up?
				{' '}
				<Button to='/signup' inline>
					Register
				</Button>
			</p>

			<form method='POST' onSubmit={_onFormSubmit}>
				<InputBox name='email' type='email' showError={emailError} onChange={() => setEmailError(false)} errorMessage={emailErrorMessage}>Email</InputBox>
				<InputBox name='password' type='password'>Password</InputBox>

				<Button to='/password-reset' inline>
					Forgot password?
				</Button>
				<Button submit>
					Sign in
				</Button>
			</form>
		</div>
	)
}
