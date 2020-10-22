import styles from '../styles/components/InputBox.module.scss'
import classNames from 'classnames'
import Input from './input'
import Label from './label'

export default function InputBox(props) {
	return (
		<>
			<Label for={props.name} classNames={styles.inputBox}>
				{props.text || props.children}
				<Input type={props.type} name={props.name} id={props.name} />
			</Label>
		</>
	)
}