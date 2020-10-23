import React from "react";
import TileStarship from "../TileStarship";
import "./EntitiesStarships.css";
import convertNumberInToString from "../utils/convertNumberInToString";

class EntitiesStarships extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadStarshipsData();
  }
  
  convertToNumber = (value) => {
    if (value.includes(",")) {
      return +(value.split(",").join(""));
    }

    return value || +value;
  }

  renderTiles = () => {
    return this.props.starships.map((element, index) => {
      return <TileStarship 
        name={element.name} 
        cost={convertNumberInToString(element.cost_in_credits)} 
        passengers={convertNumberInToString(this.convertToNumber(element.passengers))}
        key={index}
      />
    });
  }

  render() {
    return (
      <section className="entities">
        <ul className="entities__list">
          {this.renderTiles()}
        </ul>
        <button className="entities__load-button" onClick={() => this.props.loadMoreStarshipsData()}>Load More</button>
      </section>
    );
  }
}

export default EntitiesStarships;