import React from "react";
import "./TilePlanet.css";
import getInitials from "../utils/getInitials";
import convertNumberInToString from "../utils/convertNumberInToString";
import ModalPlanets from "../ModalPlanets";
import PropTypes from "prop-types";

class TilePlanet extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isModalShown: false
    }
  }

  handleShowModalClick = () => {
    this.setState({ isModalShown: true });
  }

  render() {
    const { data } = this.props;

    return (
      <li className="entities__item" onClick={this.handleShowModalClick}>
        <div className="entities__initials">{getInitials(data.name)}</div>
        <p className="entities__paragraph">Name: <span>{data.name}</span></p>
        <p className="entities__paragraph">population: <span>{convertNumberInToString(data.population)}</span></p>
        {this.state.isModalShown && <ModalPlanets url={data.url} />}
      </li>
    );
  }
}

TilePlanet.propTypes = {
  data: PropTypes.object,
}

TilePlanet.defaultProps = {
  data: {},
};

export default TilePlanet;
