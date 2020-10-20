import { combineReducers } from "redux";
import people from "./people";
import planets from "./planets";
import starships from "./starships";

const rootReducer = combineReducers({
  people,
  planets,
  starships
});

export default rootReducer;