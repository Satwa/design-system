import Button from '../components/button'
import InputBox from '../components/inputBox'
import styles from '../styles/Home.module.scss'
import React from 'react'
import Router from 'next/router'

export default function SignUp() {
	const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i

	const [pwdError, setPwdError] = React.useState(false)
	const [pwdErrorMessage, setPwdErrorMessage] = React.useState(false)

	const [emailError, setEmailError] = React.useState(false)
	const [emailErrorMessage, setEmailErrorMessage] = React.useState(false)
	
	const [textError, setTextError] = React.useState(false)
	const [textErrorMessage, setTextErrorMessage] = React.useState(false)

	const _onFormSubmit = (ev) => {
		ev.preventDefault()

		const fields = document.querySelectorAll('form input')
		let anyError = false

		if(fields[0].value.trim().length === 0){
			setTextErrorMessage('Alors comme ça vous n\'avez pas de nom ?')
			setTextError(true)
			anyError = true
		}

		if(!emailRegex.test(fields[1].value)) {
			setEmailErrorMessage('Adresse e-mail invalide')
			setEmailError(true)
			anyError = true
		}

		if(fields[2].value !== fields[3].value) {
			setPwdErrorMessage('Les mots de passe ne correspondent pas')
			setPwdError(true)
			anyError = true
		}

		if(anyError) {
			Router.push('/')
		}
	}

	return (
		<main>
			<h1>Sign up</h1>
			<span className='logoSmall'>🧠</span>
			<Button to='/signin' inline>
				Already have an account? Log in
			</Button>

			<form method='POST' onSubmit={_onFormSubmit}>
				<InputBox name='fullname' type='text' showError={textError} onChange={() => setTextError(false)} errorMessage={textErrorMessage} required>Full name</InputBox>
				<InputBox name='email' type='email' showError={emailError} onChange={() => setEmailError(false)} errorMessage={emailErrorMessage} required>Email</InputBox>
				<InputBox name='password' type='password' onChange={() => setPwdError(false)} required>Password</InputBox>
				<InputBox name='password2' type='password' showError={pwdError} onChange={() => setPwdError(false)} errorMessage={pwdErrorMessage} required>Repeat password</InputBox>

				<Button submit>
					Sign Up
				</Button>
			</form>
		</main>
	)
}
