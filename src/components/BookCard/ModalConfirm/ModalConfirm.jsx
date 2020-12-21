import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalConfirm.module.scss';

const ModalConfirm = ({ confirm, onConfirmOk, onConfirmCansel }) => {
	const { wrapper, text, buttons, btn } = styles;
	return (
		<div className={wrapper} ref={confirm}>
			<span className={text}>Вы уверены, что хотите удалить книгу?</span>
			<div className={buttons}>
				<button className={btn} onClick={onConfirmOk}>
					Ок
				</button>
				<button className={btn} onClick={onConfirmCansel}>
					Отмена
				</button>
			</div>
		</div>
	);
};

ModalConfirm.propTypes = {
	confirm: PropTypes.object,
	onConfirmOk: PropTypes.func,
	onConfirmCansel: PropTypes.func,
};

export default ModalConfirm;
