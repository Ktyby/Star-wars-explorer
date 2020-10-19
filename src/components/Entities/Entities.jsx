import React from "react";
import axios from "axios";
import "./Entities.css";
import Tile from "../Tile";

class Entities extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get(`https://swapi.dev/api/people/`).then((response) => {
      this.props.setPeopleData(response.data.results);
    }).catch((error) => {
      console.log(error); 
    });
  }

  renderTiles = () => {
    return this.props.people.map((element, index) => {
      return <Tile name={element.name} birthYear={element.birth_year} gender={element.gender} key={index}/>
    });
  }

  render() {
    return (
      <section className="entities">
        <div className="entities__wrapper">
          <ul className="entities__list">
            {this.renderTiles()}
          </ul>
        </div>
      </section>
    );
  }
}

export default Entities;