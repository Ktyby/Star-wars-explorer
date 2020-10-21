import React from "react";
import "./TileStarship.css";
import propTypes from "./propTypes";
import getInitials from "../utils/getInitials";

class TileStarship extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="entities__item">
        <div className="entities__initials">{getInitials(this.props.name)}</div>
        <p className="entities__paragraph">Name: <span>{this.props.name}</span></p>
        <p className="entities__paragraph">Cost: <span>{this.props.cost}</span></p>
        <p className="entities__paragraph">Passengers: <span>{this.props.passengers}</span></p>
      </li>
    );
  }
}

TileStarship.propTypes = propTypes;

export default TileStarship;
