import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookList.module.scss';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Booklist = ({ books }) => {
	const {
		bookList,
		heading,
		table,
		row,
		header,
		link,
		itemEnterActive,
		itemExitActive,
	} = styles;

	const renderItem = ({ name, author, id }) => {
		return (
			<CSSTransition
				key={id}
				classNames={{
					enterActive: itemEnterActive,
					exitActive: itemExitActive,
				}}
				timeout={{
					enter: 1100,
					exit: 900,
				}}
			>
				<tr className={row} key={id}>
					<td>
						<Link to={`/items/${id}`} className={link}>
							<span>{name}</span>
							<span>{author}</span>
						</Link>
					</td>
				</tr>
			</CSSTransition>
		);
	};

	return (
		<div className={bookList}>
			<h2 className={heading}>Book List</h2>
			<table className={table}>
				<thead>
					<tr className={header}>
						<td>Книга</td>
						<td>Автор</td>
					</tr>
				</thead>
				<TransitionGroup component="tbody">
					{books.map(renderItem)}
				</TransitionGroup>
			</table>
		</div>
	);
};

Booklist.propTypes = { books: PropTypes.array };

export default Booklist;
