import { LOAD_MORE_STARSHIPS_DATA_SUCCESS } from "../../constants";

const loadMoreStarshipsDataSuccess = (data) => ({
  type: LOAD_MORE_STARSHIPS_DATA_SUCCESS,
  payload: data,
});  

export default loadMoreStarshipsDataSuccess;