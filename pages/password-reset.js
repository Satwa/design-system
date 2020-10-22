import Button from '../components/button'
import InputBox from '../components/inputBox'
import styles from '../styles/Home.module.scss'

export default function PasswordReset() {
	return (
		<div className={styles.container}>
			<h1>Password reset</h1>

			<p>
				You remember your password now?
				{' '}
				<Button to='/signin' inline>
					Sign in
				</Button>
			</p>

			<InputBox name='password' type='password'>Password</InputBox>
			<InputBox name='password2' type='password'>Password</InputBox>

			<Button submit>
				Sign Up
			</Button>
		</div>
	)
}