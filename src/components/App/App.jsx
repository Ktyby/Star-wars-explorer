import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../Header";
import Entities from "../Entities";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Entities />
      </main>
    </Router>
  );
};

export default App;