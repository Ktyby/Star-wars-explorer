import { combineReducers } from "redux";
import people from "./people";
import planets from "./planets";
import starships from "./starships";
import tilesData from "./tilesData";

const rootReducer = combineReducers({
  people,
  planets,
  starships,
  tilesData
});

export default rootReducer;