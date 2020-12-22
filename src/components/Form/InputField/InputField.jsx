import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NAMES } from '@constants';
import styles from './InputField.module.scss';

const InputField = ({
	name,
	label,
	error,
	type,
	onUrlOfImageSave,
	reset,
	labelFile,
}) => {
	const [value, setValue] = useState('');

	useEffect(() => {
		reset && setValue('');
	}, [reset]);

	const classLabel = classNames(styles.label, {
		[styles.label_small]: value,
	});
	const classInput = classNames(styles.input, {
		[styles.input_wrong]: error,
	});

	const changeNameOfLabel = (evt) => {
		const input = evt.target;
		const fileName = input.files[0]?.name;
		if (fileName) {
			labelFile.current.innerHTML = fileName;
		}
	};

	const handleInputChange = (evt) => {
		if (evt.target.type === 'file') {
			changeNameOfLabel(evt);
			const file = evt.target.files[0];
			onUrlOfImageSave(file);
		} else {
			setValue(evt.target.value);
		}
	};

	return (
		<div className={styles.field}>
			<input
				className={classInput}
				id={name}
				type={type}
				name={name}
				value={value}
				onChange={handleInputChange}
				maxLength={name === NAMES.DATE ? 4 : null}
				required
			/>
			<label
				className={classLabel}
				htmlFor={name}
				ref={name === 'IMAGE' ? labelFile : null}
			>
				{label}
			</label>
			{error && <span className={styles.error}>{error}</span>}
		</div>
	);
};

InputField.propTypes = {
	name: PropTypes.string,
	type: PropTypes.string,
	label: PropTypes.string,
	error: PropTypes.string,
	reset: PropTypes.bool,
	labelFile: PropTypes.object,
	onUrlOfImageSave: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.instanceOf(null),
	]),
};

export default InputField;
