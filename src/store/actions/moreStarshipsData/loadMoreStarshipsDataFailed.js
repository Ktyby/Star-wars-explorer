import { LOAD_MORE_STARSHIPS_DATA_FAILED } from "../../constants";

const loadMoreStarshipsDataFailed = (error) => ({
  type: LOAD_MORE_STARSHIPS_DATA_FAILED,
  payload: error,
});  

export default loadMoreStarshipsDataFailed;