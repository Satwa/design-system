import styles from '../styles/components/InputBox.module.scss'
import classNames from 'classnames'
import Input from './input'
import Label from './label'
import ErrorMessage from './errorMessage'

export default function InputBox(props) {
	return (
		<div className={styles.inputBox}>
			<Label for={props.name} classNames={classNames(styles.label, { [styles.error]: props.showError })}>
				{props.text || props.children}
			</Label>
			<Input type={props.type} name={props.name} id={props.name} onChange={props.onChange} />
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