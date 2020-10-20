import React from "react";
import Tile from "../Tile";
import "./EntitiesPlanets.css";

class EntitiesPlanets extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadPlanetsData();
  }

  renderTiles = () => {
    return this.props.planets.map((element, index) => {
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

export default EntitiesPlanets;