import React from 'react'
import styles from '../styles/components/InputBox.module.scss'
import classNames from 'classnames'
import Input from './input'

export default function InputBox(props) {

	const [isFilled, setisFilled] = React.useState(false)

	const onChange = (e) => {
		setisFilled(e.target.value.length > 0)
		if (props.onChange) {
			props.onChange(e)
		}
	}

	return (
		<div className={styles.inputBox}>
			<label htmlFor={props.name} className={classNames(styles.label, { [styles.error]: props.showError, [styles.filled]: isFilled })}>
				{props.errorMessage || props.text || props.children}
			</label>
			<Input type={props.type} name={props.name} id={props.name} className={{ [styles.inputError]: props.showError }} onChange={onChange} required={props.required} />
		</div>
	)
}