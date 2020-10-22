import styles from '../styles/components/Button.module.scss'
import classNames from 'classnames'
import Link from 'next/link'

export default function Button(props) {
	return (
		props.inline ? (
			<Link href={props.to}>
				<a>
					<span className={classNames(styles.inlineButton, props.className)} onClick={props.onClick}>
						<span>{props.children || props.text}</span>
					</span>
				</a>
			</Link>
		) : (
			props.submit ? (
				<button className={classNames(styles.button, styles.formButton)}>
					<span>{props.children || props.text}</span>
				</button>
			) : (
				<Link href={props.to}>
					<a>
						<span className={classNames(styles.button)} onClick={props.onClick}>
							<span>{props.children || props.text}</span>
						</span>
					</a>
				</Link>
			)
		)
	)
}