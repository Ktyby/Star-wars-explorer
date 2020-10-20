import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import EntitiesPeople from "../EntitiesPeople";
import EntitiesPlanets from "../EntitiesPlanets";
import EntitiesStarships from "../EntitiesStarships";
import Header from "../Header";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/people" component={EntitiesPeople}/>
        <Route path="/planets" component={EntitiesPlanets}/>
        <Route path="/starships" component={EntitiesStarships}/>
        <Redirect from="/" to="/people"/>
      </Switch>
    </main>
  );
};

export default Main;
