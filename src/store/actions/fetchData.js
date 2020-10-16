import { START_DATA } from "../constants/index";

const getData = (data) => ({
  type: START_DATA,
  payload: data
});

const peopleFetchData = (url) => {
  axios.get(url).then((response) => {
    dispatch(getData(response.json()));
  }).catch((error) => {
    throw new Error(error.statusText);
  });
}

export default { getData, peopleFetchData };