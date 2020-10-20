import React from "react";
import Tile from "../Tile";
import "./EntitiesStarships.css";

class EntitiesStarships extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadStarshipsData();
  }

  renderTiles = () => {
    return this.props.starships.map((element, index) => {
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

export default EntitiesStarships;