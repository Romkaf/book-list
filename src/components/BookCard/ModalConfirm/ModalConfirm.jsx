import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { keyCode } from '@constants';
import { CSSTransition } from 'react-transition-group';
import styles from './ModalConfirm.module.scss';

const ModalConfirm = ({ isHidden, onConfirmOk, onConfirmCansel }) => {
	const refModal = useRef(null);

	const {
		wrapper,
		modal,
		text,
		buttons,
		btn,
		modalExitActive,
		modalEnterActive,
	} = styles;

	const handleWrapperKeyDown = (evt) => {
		if (evt.keyCode === keyCode.ESC) {
			onConfirmCansel();
		}
	};

	const handleWrapperClick = (evt) =>
		evt.target.classList.contains(wrapper) && onConfirmCansel();

	return (
		<CSSTransition
			in={isHidden}
			classNames={{
				enterActive: modalEnterActive,
				exitActive: modalExitActive,
			}}
			timeout={400}
			mountOnEnter
			unmountOnExit
			onEnter={() => {
				refModal.current.focus();
				document.body.style.overflow = 'hidden';
			}}
			onExited={() => (document.body.style.overflow = 'visible')}
		>
			<div
				className={wrapper}
				onKeyDown={handleWrapperKeyDown}
				onClick={handleWrapperClick}
				tabIndex="0"
				ref={refModal}
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
		</CSSTransition>
	);
};

ModalConfirm.propTypes = {
	isHidden: PropTypes.bool,
	onConfirmOk: PropTypes.func,
	onConfirmCansel: PropTypes.func,
};

export default ModalConfirm;
