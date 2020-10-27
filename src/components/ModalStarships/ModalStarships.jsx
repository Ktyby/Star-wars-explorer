import React from "react";
import "./ModalStarships.css";
import Modal from "../Modal";
import PropTypes from "prop-types";

class ModalStarships extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadStarshipsTilesData(this.props.url);
  }

  renderLinks = (links) => {
    if (!links) return;

    return links.map((element, index) => {
      return <a className="modal__link" href={element.url} key={index}>{element.name || element.title}</a>
    });
  }

  render() {
    const { starshipsTilesData } = this.props;

    return (
      <Modal name={starshipsTilesData.name}>
        <div className="modal__content">
          <div className="modal__information">
            <div className="modal__characteristic">
              <div className="modal__stats">
                <h3 className="modal__title">Stats</h3>
                <p className="modal__description">Manufacturer: <span>{starshipsTilesData.manufacturer}</span></p>
                <p className="modal__description">Cost: <span>{starshipsTilesData.cost_in_credits}</span></p>
                <p className="modal__description">Length: <span>{starshipsTilesData.length}</span></p>
                <p className="modal__description">Max speed: <span>{starshipsTilesData.max_atmosphering_speed}</span></p>
                <p className="modal__description">Crew: <span>{starshipsTilesData.crew}</span></p>
                <p className="modal__description">Passengers: <span>{starshipsTilesData.passengers}</span></p>
                <p className="modal__description">Cargo capacity: <span>{starshipsTilesData.cargo_capacity}</span></p>
                <p className="modal__description">Consumables: <span>{starshipsTilesData.consumables}</span></p>
                <p className="modal__description">Hyperdrive rating: <span>{starshipsTilesData.hyperdrive_rating}</span></p>
                <p className="modal__description">MGLT: <span>{starshipsTilesData.MGLT}</span></p>
                <p className="modal__description">Starship class: <span>{starshipsTilesData.starship_class}</span></p>
              </div>
            </div>
            <div className="modal__relations">
              <div className="modal__relation">
                <h3 className="modal__title">Films</h3>
                {this.renderLinks(starshipsTilesData.films)}
              </div>
              <div className="modal__relation">
                <h3 className="modal__title">Pilots</h3>
                {this.renderLinks(starshipsTilesData.pilots)}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

ModalStarships.propTypes = {
  loadStarshipsTilesData: PropTypes.func,
  url: PropTypes.string
}

ModalStarships.defaultProps = {
  loadStarshipsTilesData: {},
  url: null
};

export default ModalStarships;