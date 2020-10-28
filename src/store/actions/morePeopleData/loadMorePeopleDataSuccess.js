import { LOAD_MORE_PEOPLE_DATA_SUCCESS } from '../../constants';

const loadMorePeopleDataSuccess = (data, nextPage) => ({
	type: LOAD_MORE_PEOPLE_DATA_SUCCESS,
	payload: data,
	nextPage,
});

export default loadMorePeopleDataSuccess;
