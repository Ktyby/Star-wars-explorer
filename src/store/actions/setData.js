import { SET_DATA } from "../constants/index";

const setData = (data) => ({
  type: SET_DATA,
  payload: data
});  

export default setData;