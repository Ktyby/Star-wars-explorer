import { combineReducers } from "redux";
import people from "./people";
import planets from "./planets";
import starships from "./starships";
import morePeople from "./morePeople";
import morePlanets from "./morePlanets";
import moreStarships from "./moreStarships";

const rootReducer = combineReducers({
  people,
  planets,
  starships,
  morePeople,
  morePlanets,
  moreStarships
});

export default rootReducer;