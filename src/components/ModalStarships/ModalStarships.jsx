import PropTypes from "prop-types";
import React from "react";
import { PEOPLE_API_URL } from "../../constants";
import Modal from "../Modal";
import ModalPeople from "../ModalPeople";
import renderLinks from "../utils/renderLinks";
import "./ModalStarships.css";

class ModalStarships extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      isShowPeopleModal: false,
      url: null
    }
  }

  setStateDependingOnUrl = (url) => {
    if (url.includes(PEOPLE_API_URL)) {
      this.setState({ 
        isShowPeopleModal: true,
        url
      });
    }
  }

  componentDidMount() {
    this.props.loadStarshipsTilesData(this.props.url);
  }

  render() {
    const { starshipsTilesData } = this.props;

    console.log(this.state.url)

    return (
      <Modal name={starshipsTilesData.name} onCloseButtonClick={this.props.onCloseButtonClick}>
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
                {renderLinks(starshipsTilesData.films, this.setStateDependingOnUrl)}
              </div>
              <div className="modal__relation">
                <h3 className="modal__title">Pilots</h3>
                {renderLinks(starshipsTilesData.pilots, this.setStateDependingOnUrl)}
                {this.state.isShowPeopleModal && 
                  <ModalPeople
                    url={this.state.url}
                    onCloseButtonClick={() => () => this.props.onCloseButtonClick()}
                  />
                }
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