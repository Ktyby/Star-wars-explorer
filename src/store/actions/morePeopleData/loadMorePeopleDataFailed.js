import { LOAD_MORE_PEOPLE_DATA_FAILED } from "../../constants";

const loadMorePeopleDataFailed = (error) => ({
  type: LOAD_MORE_PEOPLE_DATA_FAILED,
  payload: error,
});

export default loadMorePeopleDataFailed;