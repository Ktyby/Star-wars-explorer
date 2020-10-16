import React from "react";
import axios from "axios";
import getData from "../../store/actions/getData";
import "./Entities.css";

class Entities extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get(`https://swapi.dev/api/people/`).then((response) => {
      getData(response.data.results);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <section className="entities">
        <div className="entities__wrapper">
          <ul className="entities__list">
          </ul>
        </div>
      </section>
    );
  }
}

export default Entities;