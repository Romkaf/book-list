import React, { useState, useEffect, useRef } from 'react';
import InputField from './InputField';
import { validate } from '@utils/validate';
import { NAMES, TYPES, LABELS, BOOK_FORM } from '@constants';
import PropTypes from 'prop-types';
import styles from './Form.module.scss';

const Form = ({ onAddBook }) => {
	const [errorTexts, setErrorTexts] = useState({});
	const [urlImage, setUrlImage] = useState('');
	const [reset, setReset] = useState(false);
	const labelFile = useRef();

	useEffect(() => {
		setReset(false);
	}, [reset]);

	const { NAME, IMAGE, AUTHOR, DATE, PUBLISHER } = NAMES;
	const { FILE, TEXT, BUTTON } = TYPES;
	const { form, elem, button } = styles;

	const inputsData = [
		{ name: NAME, label: LABELS.NAME, error: errorTexts?.name, type: TEXT },
		{
			name: AUTHOR,
			label: LABELS.AUTHOR,
			error: errorTexts?.author,
			type: TEXT,
		},
		{
			name: DATE,
			label: LABELS.DATE,
			error: errorTexts?.date,
			type: TEXT,
		},

		{
			name: PUBLISHER,
			label: LABELS.PUBLISHER,
			error: errorTexts?.publisher,
			type: TEXT,
		},
		{
			name: IMAGE,
			label: LABELS.IMAGE,
			error: errorTexts?.image,
			type: FILE,
		},
	];

	const handleFormReset = () => {
		const form = document.forms[BOOK_FORM];
		form.reset();
		labelFile.current.innerHTML = LABELS.IMAGE;
		setUrlImage('');
		setReset(true);
	};

	const validateData = (data) => {
		const errors = validate(data);
		setErrorTexts(errors);

		if (Object.keys(errors).length === 0) {
			onAddBook(data);
			handleFormReset();
		}
	};

	const handleBtnClick = () => {
		const form = document.forms[BOOK_FORM];
		const newData = {
			name: form[NAME].value,
			image: urlImage,
			author: form[AUTHOR].value,
			date: form[DATE].value,
			publisher: form[PUBLISHER].value,
		};

		validateData(newData);
	};

	const handleUrlOfImageSave = (file) => {
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setUrlImage(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<form className={form} name={BOOK_FORM}>
			{inputsData.map((it) => {
				const { name, label, error, type } = it;
				return (
					<InputField
						key={name}
						name={name}
						label={label}
						error={error}
						type={type}
						onUrlOfImageSave={type === FILE ? handleUrlOfImageSave : null}
						reset={reset}
						labelFile={type === FILE ? labelFile : null}
					/>
				);
			})}

			<button className={button} type={BUTTON} onClick={handleBtnClick}>
				Ввести данные
			</button>
		</form>
	);
};

Form.propTypes = { onaAddBook: PropTypes.func };

export default Form;
