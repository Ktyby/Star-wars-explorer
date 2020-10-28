import { LOAD_MORE_PEOPLE_DATA } from '../../constants';

const loadMorePeopleData = (page) => ({
	type: LOAD_MORE_PEOPLE_DATA,
	page,
});

export default loadMorePeopleData;
