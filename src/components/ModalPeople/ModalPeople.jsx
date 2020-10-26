import React from "react";
import "./ModalPeople.css";

class ModalPeople extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  renderLinks = (links) => {
    if (!links) return;

    return links.map((element, index) => {
      return <a className="modal__link" href={element} key={index}></a>
    });
  }

  render() {
    const { data } = this.props;

    return (
      <div className="modal__content">
        <div className="modal__information">
          <div className="modal__characteristic">
            <div className="modal__appearance">
              <h3 className="modal__title">Appearence</h3>
              <p className="modal__description">Hair color: <span>{data.hair_color}</span></p>
              <p className="modal__description">Skin color: <span>{data.skin_color}</span></p>
              <p className="modal__description">Eye color: <span>{data.eye_color}</span></p>
              <p className="modal__description">Gender: <span>{data.gender}</span></p>
            </div>
            <div className="modal__stats">
              <h3 className="modal__title">Stats</h3>
              <p className="modal__description">Height: <span>{data.height}</span></p>
              <p className="modal__description">Mass: <span>{data.mass}</span></p>
            </div>
          </div>
          <div className="modal__relations">
            <div className="modal__relation">
              <h3 className="modal__title">Home world</h3>
              {this.renderLinks([data.homeworld])}
            </div>
            <div className="modal__relation">
              <h3 className="modal__title">Films</h3>
              {this.renderLinks(data.films)}
            </div>
            <div className="modal__relation">
              <h3 className="modal__title">Vehicles</h3>
              {this.renderLinks(data.vehicles)}
            </div>
            <div className="modal__relation">
              <h3 className="modal__title">Starships</h3>
              {this.renderLinks(data.starships)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalPeople;