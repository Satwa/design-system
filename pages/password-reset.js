import Button from '../components/button'
import InputBox from '../components/inputBox'
import styles from '../styles/Home.module.scss'
import React from 'react'

export default function PasswordReset() {
	const [error, setError] = React.useState(false)
	const [errorMessage, setErrorMessage] = React.useState(false)

	const _onFormSubmit = (ev) => {
		ev.preventDefault()

		const fields = document.querySelectorAll('form input')
		if(fields[0].value !== fields[1].value) {
			setErrorMessage('Vos deux mots de passe ne sont pas identiques.')
			setError(true)
		}
	}

	return (
		<main>
			<h1>Password reset</h1>

			<p>
				You remember your password now?
				{' '}
				<Button to='/signin' inline>
					Sign in
				</Button>
			</p>

			<form method='POST' onSubmit={_onFormSubmit}>
				<InputBox 
					name='password' 
					type='password' 
					onChange={() => setError(false)}
					showError={error}
					required
				>
					Password
				</InputBox>

				<InputBox 
					name='password2' 
					type='password' 
					onChange={() => setError(false)}
					showError={error}
					errorMessage={errorMessage}
					required
				>
					Repeat password
				</InputBox>

				<Button submit>
					Change your password
				</Button>
			</form>
		</main>
	)
}