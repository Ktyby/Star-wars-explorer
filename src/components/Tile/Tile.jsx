import React from "react";
import "./Tile.css";
import propTypes from "./propTypes";

class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="entities__item">
        <div className="entities__initials"></div>
        <p className="entities__name">Name: {this.props.name}</p>
        <p className="entities__birth">Birth year: {this.props.birthYear}</p>
        <p className="entities__gender">Gender: {this.props.gender}</p>
      </li>
    );
  }
}

Tile.propTypes = propTypes;

export default Tile;
