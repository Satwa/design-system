import Button from '../components/button'
import s from '../styles/Home.module.scss'

export default function Home() {
	return (
		<main>
			<h1>Welcome to Design System!</h1>
			<span className={s.logo}>🧠</span>
			<Button to='/signin' primary>
				Sign in
			</Button>
			<Button to='/signup' inline>
				New ? Sign up now !
			</Button>
		</main>
	)
}
