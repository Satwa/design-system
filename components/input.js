import styles from '../styles/components/Input.module.scss'
import classNames from 'classnames'

export default function Input(props) {
	return (
		<input 
			{...props}
			className={classNames(styles.input, props.className)} 
		/>
	)
}