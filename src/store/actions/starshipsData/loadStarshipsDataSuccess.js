import { LOAD_STARSHIPS_DATA_SUCCESS } from "../../constants";

const loadStarshipsDataSuccess = (data) => ({
  type: LOAD_STARSHIPS_DATA_SUCCESS,
  payload: data,
});  

export default loadStarshipsDataSuccess;