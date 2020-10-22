import { LOAD_MORE_PEOPLE_DATA } from "../../constants";

let page = 2;

const loadMorePeopleData = () => ({
  type: LOAD_MORE_PEOPLE_DATA,
  page: page++,
});  

export default loadMorePeopleData;