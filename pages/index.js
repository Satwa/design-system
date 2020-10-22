import Button from '../components/button'
import styles from '../styles/Home.module.scss'

export default function Home() {
	return (
		<div className={styles.container}>
			<Button to='/signup' inline>
				Register
			</Button>
			<Button to='/signin' inline>
				Sign in
			</Button>
			<Button to='/password-reset' inline>
				Reset password
			</Button>
		</div>
	)
}
