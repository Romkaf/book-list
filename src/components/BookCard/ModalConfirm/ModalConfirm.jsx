import React from 'react';
import PropTypes from 'prop-types';
import { keyCode } from '@constants';
import styles from './ModalConfirm.module.scss';

const ModalConfirm = ({ confirm, onConfirmOk, onConfirmCansel }) => {
	const { wrapper, modal, text, buttons, btn } = styles;

	const handleWrapperKeyDown = (evt) => {
		if (evt.keyCode === keyCode.ESC) {
			onConfirmCansel();
		}
	};

	const handleWrapperClick = (evt) =>
		evt.target.classList.contains(wrapper) && onConfirmCansel();

	return (
		<div
			className={wrapper}
			ref={confirm}
			onKeyDown={handleWrapperKeyDown}
			onClick={handleWrapperClick}
			tabIndex="0"
		>
			<div className={modal}>
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
		</div>
	);
};

ModalConfirm.propTypes = {
	confirm: PropTypes.object,
	onConfirmOk: PropTypes.func,
	onConfirmCansel: PropTypes.func,
};

export default ModalConfirm;
