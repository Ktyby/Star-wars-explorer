import React from "react";
import "./TilePeople.css";
import propTypes from "./propTypes";
import getInitials from "../utils/getInitials";

class TilePeople extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="entities__item">
        <div className="entities__initials">{getInitials(this.props.name)}</div>
        <p className="entities__paragraph">Name: <span>{this.props.name}</span></p>
        <p className="entities__paragraph">Birth year: <span>{this.props.birthYear}</span></p>
        <p className="entities__paragraph">Gender: <span>{this.props.gender}</span></p>
      </li>
    );
  }
}

TilePeople.propTypes = propTypes;

export default TilePeople;
