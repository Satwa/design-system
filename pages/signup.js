import Button from '../components/button'
import InputBox from '../components/inputBox'
import styles from '../styles/Home.module.scss'

export default function SignUp() {
	const _onFormSubmit = (ev) => {
		ev.preventDefault()

		const fields = document.querySelectorAll('form input')
		console.log(fields)
	}

	return (
		<div className={styles.container}>
			<h1>Sign Up</h1>

			<p>
				Already got an account?
				{' '}
				<Button to='/signin' inline>
					Sign in
				</Button>
			</p>

			<form method='POST' onSubmit={_onFormSubmit}>
				<InputBox name='email' type='email'>Email</InputBox>
				<InputBox name='password' type='password'>Password</InputBox>

				<Button submit>
					Sign Up
				</Button>
			</form>
		</div>
	)
}
