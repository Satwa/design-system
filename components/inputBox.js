import styles from '../styles/components/InputBox.module.scss'
import classNames from 'classnames'
import Input from './input'
import ErrorMessage from './errorMessage'

export default function InputBox(props) {
	return (
		<div className={styles.inputBox}>
			<label htmlFor={props.name} className={classNames(styles.label, { [styles.error]: props.showError })}>
				{props.text || props.children}
			</label>
			<Input type={props.type} name={props.name} id={props.name} onChange={props.onChange} required={props.required} />
			{
				props.showError && (
					<ErrorMessage>
						{props.errorMessage}
					</ErrorMessage>
				)
			}
		</div>
	)
}