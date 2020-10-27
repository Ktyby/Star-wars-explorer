import React from "react";
import "./ModalPeople.css";
import Modal from "../Modal";
import ModalPlanets from "../ModalPlanets";
import PropTypes from "prop-types";

class ModalPeople extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      isShownModal: false,
      url: null
    }
  }

  componentDidMount() {
    this.props.loadPeopleTilesData(this.props.url);
  }

  renderLinks = (links) => {
    if (!links) return;

    return links.map((element, index) => {
      return <a className="modal__link" key={index}>{element.name || element.title}</a>
    });
  }

  renderParagraph = (paragraphs) => {
    if (!paragraphs) return;

    return paragraphs.map((element, index) => {
      return <p className="modal__paragraph" key={index}>{element.name || element.title}</p>
    });
  }

  handleShowModalClick = () => {
    this.setState({isShownModal: true});
  }

  render() {
    const { peopleTilesData } = this.props;

    return (
      <Modal name={peopleTilesData.name}  isClosed={this.props.isClosed}>
        <div className="modal__content">
          <div className="modal__information">
            <div className="modal__characteristic">
              <div className="modal__appearance">
                <h3 className="modal__title">Appearence</h3>
                <p className="modal__description">Hair color: <span>{peopleTilesData.hair_color}</span></p>
                <p className="modal__description">Skin color: <span>{peopleTilesData.skin_color}</span></p>
                <p className="modal__description">Eye color: <span>{peopleTilesData.eye_color}</span></p>
                <p className="modal__description">Gender: <span>{peopleTilesData.gender}</span></p>
              </div>
              <div className="modal__stats">
                <h3 className="modal__title">Stats</h3>
                <p className="modal__description">Height: <span>{peopleTilesData.height}</span></p>
                <p className="modal__description">Mass: <span>{peopleTilesData.mass}</span></p>
              </div>
            </div>
            <div className="modal__relations">
              <div className="modal__relation">
                <h3 className="modal__title">Home world</h3>
                {peopleTilesData.homeworld && <a 
                    className="modal__link" 
                    href="#"
                    onClick={this.handleShowModalClick}>
                    {peopleTilesData.homeworld.name}
                  </a>
                }
                {this.state.isShownModal && <ModalPlanets url={peopleTilesData.homeworld.url}/>}
              </div>
              <div className="modal__relation">
                <h3 className="modal__title">Films</h3>
                {this.renderParagraph(peopleTilesData.films)}
              </div>
              <div className="modal__relation">
                <h3 className="modal__title">Vehicles</h3>
                {this.renderParagraph(peopleTilesData.vehicles)}
              </div>
              <div className="modal__relation">
                <h3 className="modal__title">Starships</h3>
                {this.renderLinks(peopleTilesData.starships)}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

ModalPeople.propTypes = {
  loadPeopleTilesData: PropTypes.func,
  url: PropTypes.string
}

ModalPeople.defaultProps = {
  loadPeopleTilesData: {},
  url: null
};

export default ModalPeople;