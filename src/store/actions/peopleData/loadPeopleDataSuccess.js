import { LOAD_PEOPLE_DATA_SUCCESS } from "../../constants";

const loadPeopleDataSuccess = (data) => ({
  type: LOAD_PEOPLE_DATA_SUCCESS,
  payload: data,
});  

export default loadPeopleDataSuccess;