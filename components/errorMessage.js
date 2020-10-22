import styles from '../styles/components/InputBox.module.scss'
import classNames from 'classnames'
import Input from './input'

export default function ErrorMessage(props) {
	return (
		<div className={styles.errorMessage}>
			{props.text || props.children}
		</div>
	)
}