import React from 'react';
import { TYPES } from '@constants';
import SpriteSvg from '@utils/SpriteSvg';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ title, onClick, svgName }) => (
	<button
		className={styles.btn}
		type={TYPES.BUTTON}
		title={title}
		onClick={onClick}
	>
		<SpriteSvg name={svgName} />
	</button>
);

Button.propTypes = {
	title: PropTypes.string,
	onClick: PropTypes.func,
	svgName: PropTypes.string,
};

export default Button;
