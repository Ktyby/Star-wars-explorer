import React from "react";
import "./TilePlanet.css";
import propTypes from "./propTypes";
import getInitials from "../utils/getInitials";

class TilePlanet extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="entities__item">
        <div className="entities__initials">{getInitials(this.props.name)}</div>
        <p className="entities__paragraph">Name: <span>{this.props.name}</span></p>
        <p className="entities__paragraph">population: <span>{this.props.population}</span></p>
      </li>
    );
  }
}

TilePlanet.propTypes = propTypes;

export default TilePlanet;
