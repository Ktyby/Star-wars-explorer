import { LOAD_MORE_PEOPLE_DATA_SUCCESS } from "../../constants";

const loadMorePeopleDataSuccess = (data) => ({
  type: LOAD_MORE_PEOPLE_DATA_SUCCESS,
  payload: data,
});  

export default loadMorePeopleDataSuccess;