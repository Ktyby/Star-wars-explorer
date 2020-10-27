import React from "react";
import "./ModalPlanets.css";
import Modal from "../Modal";
import PropTypes from "prop-types";

class ModalPlanets extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadPlanetsTilesData(this.props.url);
  }

  renderLinks = (links) => {
    if (!links) return;

    return links.map((element, index) => {
      return <a className="modal__link" href={element.url} key={index}>{element.name || element.title}</a>
    });
  }

  render() {
    const { planetsTilesData } = this.props;

    console.log(this.props)

    return (
      <Modal name={planetsTilesData.name}>
        <div className="modal__content">
          <div className="modal__information">
            <div className="modal__characteristic">
              <div className="modal__stats">
                <h3 className="modal__title">Stats</h3>
                <p className="modal__description">Rotation period: <span>{planetsTilesData.rotation_period}</span></p>
                <p className="modal__description">Orbital period: <span>{planetsTilesData.orbital_period}</span></p>
                <p className="modal__description">Diameter: <span>{planetsTilesData.diameter}</span></p>
                <p className="modal__description">Climate: <span>{planetsTilesData.climate}</span></p>
                <p className="modal__description">Gravity: <span>{planetsTilesData.gravity}</span></p>
                <p className="modal__description">Terrain: <span>{planetsTilesData.terrain}</span></p>
                <p className="modal__description">Surface water: <span>{planetsTilesData.surface_water}</span></p>
                <p className="modal__description">Population: <span>{planetsTilesData.population}</span></p>
              </div>
            </div>
            <div className="modal__relations">
              <div className="modal__relation">
                <h3 className="modal__title">Residents</h3>
                {this.renderLinks(planetsTilesData.residents)}
              </div>
              <div className="modal__relation">
                <h3 className="modal__title">Films</h3>
                {this.renderLinks(planetsTilesData.films)}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

ModalPlanets.propTypes = {
  loadPlanetsTilesData: PropTypes.func,
  url: PropTypes.string
}

ModalPlanets.defaultProps = {
  loadPlanetsTilesData: {},
  url: null
};


export default ModalPlanets;