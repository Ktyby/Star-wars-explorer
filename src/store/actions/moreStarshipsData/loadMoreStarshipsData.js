import { LOAD_MORE_STARSHIPS_DATA } from "../../constants";

let pageNumber = 1;

const loadMoreStarshipsData = () => ({
  type: LOAD_MORE_STARSHIPS_DATA,
  page: `https://swapi.dev/api/starships/?page=${++pageNumber}`
});  

export default loadMoreStarshipsData;