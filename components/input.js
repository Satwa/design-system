import styles from '../styles/components/Input.module.scss'
import classNames from 'classnames'

export default function Input(props) {
	return (
		<input type={props.type} name={props.name} id={props.id} className={classNames(styles.input, props.className)} />
	)
}