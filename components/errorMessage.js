import styles from '../styles/components/InputBox.module.scss'
import classNames from 'classnames'
import Input from './input'
import Label from './label'

export default function ErrorMessage(props) {
	return (
		<div className={styles.errorMessage}>
			{props.text || props.children}
		</div>
	)
}