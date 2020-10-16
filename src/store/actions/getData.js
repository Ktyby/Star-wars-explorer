import { START_DATA } from "../constants/index";

const getData = (data) => ({
  type: START_DATA,
  payload: data
});

export default getData;