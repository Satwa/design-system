import Button from '../components/button'
import InputBox from '../components/inputBox'
import styles from '../styles/Home.module.scss'

export default function SignIn() {
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

			<InputBox name='email' type='email'>Email</InputBox>
			<InputBox name='password' type='password'>Password</InputBox>

			<Button to='/password-reset' inline>
				Forgot password?
			</Button>
			<Button submit>
				Sign in
			</Button>
		</div>
	)
}
