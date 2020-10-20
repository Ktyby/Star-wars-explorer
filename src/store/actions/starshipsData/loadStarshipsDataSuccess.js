import { LOAD_STARSHIPS_DATA } from "../../constants";

const loadStarshipsData = (data) => ({
  type: LOAD_STARSHIPS_DATA,
  payload: data,
});  

export default loadStarshipsData;