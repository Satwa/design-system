import styles from '../styles/components/Button.module.scss'
import classNames from 'classnames'
import Link from 'next/link'

export default function Button(props) {
	return props.submit ? (
		<button className={classNames(styles.button, styles.primary)}>
			<span>{props.children || props.text}</span>
		</button>
	) : (
		<Link href={props.to}>
			<a>
				<span className={classNames({ [styles.inline]: props.inline, [styles.secondary]: props.secondary, [styles.primary]: !props.inline && !props.secondary }, styles.button)} onClick={props.onClick}>
					<span>{props.children || props.text}</span>
				</span>
			</a>
		</Link>
	)
	// (
	// 	props.inline ? (
	// 		<Link href={props.to}>
	// 			<a>
	// 				<span className={classNames(styles.inline, style.button)} onClick={props.onClick}>
	// 					<span>{props.children || props.text}</span>
	// 				</span>
	// 			</a>
	// 		</Link>
	// 	) : (
			
	// 	)
	// )
}