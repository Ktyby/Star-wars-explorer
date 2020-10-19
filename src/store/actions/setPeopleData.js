import { SET_PEOPLE_DATA } from "../constants";

const setPeopleData = (data) => ({
  type: SET_PEOPLE_DATA,
  payload: data,
});  

export default setPeopleData;