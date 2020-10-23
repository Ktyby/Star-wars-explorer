import { LOAD_MORE_PEOPLE_DATA } from "../../constants";

let pageNumber = 1;

const loadMorePeopleData = () => ({
  type: LOAD_MORE_PEOPLE_DATA,
  page: `https://swapi.dev/api/people/?page=${++pageNumber}`,
});  

export default loadMorePeopleData;