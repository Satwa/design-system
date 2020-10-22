import Button from '../components/button'
import InputBox from '../components/inputBox'
import styles from '../styles/Home.module.scss'

export default function SignUp() {
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

			<InputBox name='email' type='email'>Email</InputBox>
			<InputBox name='password' type='password'>Password</InputBox>

			<Button submit>
				Sign Up
			</Button>
		</div>
	)
}
