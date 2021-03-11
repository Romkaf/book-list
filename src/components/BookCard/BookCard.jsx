import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './BookCard.module.scss';
import { LABELS, SVG_NAMES } from '@constants';
import BookEdit from '@components/BookCard/BookEdit';
import Button from './Button';
import { useHistory } from 'react-router-dom';
import ModalConfirm from './ModalConfirm';

const BookCard = ({ book, onDeleteBook, onEditBook }) => {
	const [isHidden, setIsHidden] = useState(false);
	const history = useHistory();
	const [isEdit, setIsEdit] = useState(false);

	useEffect(() => {
		setIsEdit(false);
	}, [book]);

	const { image, name, author, publisher, date, id } = book;
	const { PUBLISHER, DATE } = LABELS;
	const { EDIT, DELETE, CLOSE } = SVG_NAMES;

	const {
		wrapper,
		card,
		heading,
		info,
		cover,
		name: bookName,
		author: bookAuthor,
		otherDetails,
		buttonWrapper,
	} = styles;

	const handleBtnEdit = () => setIsEdit(true);
	const handleBtnDelete = () => setIsHidden(true);
	const handleBtnClose = () => history.push(`/items`);

	const handleBtnDeleteSucces = () => {
		onDeleteBook(id);
		history.push(`/items`);
	};

	const handledBtnDleteCansel = () => {
		setIsHidden(false);
		history.push(`/items/${id}`);
	};

	const buttons = [
		{
			title: 'Редактировать',
			id: EDIT,
			func: handleBtnEdit,
		},
		{ title: 'Удалить', id: DELETE, func: handleBtnDelete },
		{ title: 'Закрыть', id: CLOSE, func: handleBtnClose },
	];

	return (
		<div className={wrapper}>
			<article className={card}>
				<h2 className={heading}>Book Card</h2>
				{isEdit ? (
					<BookEdit
						book={book}
						onSetIsEdit={setIsEdit}
						onEditBook={onEditBook}
					/>
				) : (
					<>
						<div className={cover}>
							<img src={image} alt={name} />
						</div>
						<div className={info}>
							<h4 className={bookName}>{name}</h4>
							<span className={bookAuthor}>{author}</span>
							<div className={otherDetails}>
								<p>
									{PUBLISHER}
									<span>{publisher}</span>
								</p>
								<p>
									{DATE}
									<span>{date}</span>
								</p>
							</div>
						</div>
						<div className={buttonWrapper}>
							{buttons.map((it) => (
								<Button
									key={it.id}
									title={it.title}
									onClick={it.func}
									svgName={it.id}
								/>
							))}
						</div>
					</>
				)}
				<ModalConfirm
					isHidden={isHidden}
					onConfirmOk={handleBtnDeleteSucces}
					onConfirmCansel={handledBtnDleteCansel}
				/>
			</article>
		</div>
	);
};

BookCard.propTypes = {
	books: PropTypes.array,
	deleteBook: PropTypes.func,
	editBook: PropTypes.func,
};

export default BookCard;
