import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookList.module.scss';
import { Link } from 'react-router-dom';

const Booklist = ({ books }) => {
	const { bookList, heading, table, row, header, link } = styles;

	const renderItem = ({ name, author, id }) => {
		return (
			<tr className={row} key={id}>
				<td>
					<Link to={`/items/${id}`} className={link}>
						<span>{name}</span>
						<span>{author}</span>
					</Link>
				</td>
			</tr>
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
				<tbody>{books.map(renderItem)}</tbody>
			</table>
		</div>
	);
};

Booklist.propTypes = { books: PropTypes.array };

export default Booklist;
