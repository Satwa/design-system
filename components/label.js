import styles from '../styles/components/Input.module.scss'
import classNames from 'classnames'

export default function Label(props) {
	return (
		<label htmlFor={props.for} className={classNames(styles.label, props.className)}>
			{props.children}
		</label>
	)
}