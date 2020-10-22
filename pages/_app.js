import '../styles/globals.scss'
import { PageTransition } from 'next-page-transitions'
import { Container } from 'next/app'

function MyApp({ Component, pageProps }) {
	return (
		<Container>
			<PageTransition timeout={300} classNames="page-transition">
				<Component {...pageProps} />
			</PageTransition>
		</Container>
	)
}

export default MyApp
