import { LOAD_PEOPLE_DATA_SUCCESS } from '../../constants';

const loadPeopleDataSuccess = (data, nextPage) => ({
	type: LOAD_PEOPLE_DATA_SUCCESS,
	payload: data,
	nextPage,
});

export default loadPeopleDataSuccess;
