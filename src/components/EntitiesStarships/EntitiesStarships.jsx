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