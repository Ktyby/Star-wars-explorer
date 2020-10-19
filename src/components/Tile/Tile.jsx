import React from "react";
import "./Tile.css";

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
        <p className="entities__gender">Gender: {this.props.Gender}</p>
      </li>
    );
  }
}

export default Tile;
