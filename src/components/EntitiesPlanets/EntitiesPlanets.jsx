import React from "react";
import TilePlanet from "../TilePlanet";
import "./EntitiesPlanets.css";
import convertNumberInToString from "../utils/convertNumberInToString";

class EntitiesPlanets extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadPlanetsData();
  }

  renderTiles = () => {
    return this.props.planets.map((element, index) => {
      return <TilePlanet name={element.name} population={convertNumberInToString(element.population)} key={index}/>
    });
  }

  render() {
    return (
      <section className="entities">
        <ul className="entities__list">
          {this.renderTiles()}
        </ul>
        {this.props.nextPage === null || <button className="entities__load-button" onClick={() => this.props.loadMorePlanetsData()}>Load More</button>}
      </section>
    );
  }
}

export default EntitiesPlanets;