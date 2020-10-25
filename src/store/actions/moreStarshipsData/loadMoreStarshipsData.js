import { API_URL } from "../../../constants";
import { LOAD_MORE_STARSHIPS_DATA } from "../../constants";

let pageNumber = 1;

const loadMoreStarshipsData = () => ({
  type: LOAD_MORE_STARSHIPS_DATA,
  page: `${API_URL}/starships/?page=${++pageNumber}`
});  

export default loadMoreStarshipsData;