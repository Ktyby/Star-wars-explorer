import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../Header";
import EntitiesContainer from "../Entities";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <EntitiesContainer />
      </main>
    </Router>
  );
};

export default App;