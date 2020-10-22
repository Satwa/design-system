import styles from '../styles/components/InputBox.module.scss'
import classNames from 'classnames'
import Input from './input'
import Label from './label'

export default function InputBox(props) {
	return (
		<div className={styles.inputBox}>
			<Label for={props.name} classNames={styles.label}>
				{props.text || props.children}
			</Label>
			<Input type={props.type} name={props.name} id={props.name} />
		</div>
	)
}