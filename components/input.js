import styles from '../styles/components/Input.module.scss'
import classNames from 'classnames'

export default function Input(props) {
	return (
		<input type={props.type} className={classNames(styles.input, props.className)} />
	)
}