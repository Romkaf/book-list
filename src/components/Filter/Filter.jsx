import React from 'react';
import PropTypes from 'prop-types';
import SpriteSvg from '@utils/SpriteSvg';
import { useHistory } from 'react-router-dom';
import styles from './Filter.module.scss';
import { keyCode, TYPES, SVG_NAMES, filterId } from '@constants';

const Filter = ({ filterValue, onChangeFilter }) => {
	const { filter, heading, input, label } = styles;
	const { TEXT } = TYPES;
	const history = useHistory();

	const handleInputChange = (evt) => {
		onChangeFilter(evt.target.value);
		history.push(`/items?search=${evt.target.value}`);
	};

	const handleInputKeyDown = (evt) => {
		if (evt.keyCode === keyCode.ESC) {
			evt.target.blur();
		}
	};

	return (
		<div className={filter}>
			<h2 className={heading}>Filter</h2>
			<input
				className={input}
				id={filterId}
				type={TEXT}
				value={filterValue}
				onChange={handleInputChange}
				onKeyDown={handleInputKeyDown}
			/>
			<label className={label} htmlFor={filterId}>
				<SpriteSvg name={SVG_NAMES.SEARCH} />
			</label>
		</div>
	);
};

Filter.propTypes = {
	filterValue: PropTypes.string,
	onChangeFilter: PropTypes.func,
};

export default Filter;
