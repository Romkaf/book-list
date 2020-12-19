import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Filter from './Filter';
import { useLocation } from 'react-router-dom';
import { changeFilter } from '@models/actions';
import { searchLength } from '@constants';

const FilterContainer = ({ filter, changeFilter }) => {
	const location = useLocation();
	useEffect(() => {
		const search = location.search;
		const searchText = decodeURI(search.substring(searchLength));

		if (search && filter !== searchText) changeFilter(searchText);
	});

	return <Filter filterValue={filter} onChangeFilter={changeFilter} />;
};

FilterContainer.propTypes = {
	filter: PropTypes.string,
	changeFilter: PropTypes.func,
};

const mapStateToProps = ({ filter }) => ({
	filter,
});

export default connect(mapStateToProps, { changeFilter })(FilterContainer);
