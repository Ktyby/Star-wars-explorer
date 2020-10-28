import { LOAD_PEOPLE_DATA_FAILED } from '../../constants';

const loadPeopleDataFailed = (error) => ({
	type: LOAD_PEOPLE_DATA_FAILED,
	payload: error,
});

export default loadPeopleDataFailed;
