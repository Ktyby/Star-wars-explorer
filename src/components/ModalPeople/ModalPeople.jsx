import React from "react";
import "./ModalPeople.css";

class ModalPeople extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="modal__content">
        <h2 className="modal__name"></h2>
        <div className="modal__information">
          <div className="modal__characteristic">
            <div className="modal__appearance">
              <h3 className="modal__title">Appearence</h3>
              <p className="modal__description">Hair color: <span></span></p>
              <p className="modal__description">Skin color: <span></span></p>
              <p className="modal__description">Eye color: <span></span></p>
              <p className="modal__description">Gender: <span></span></p>
            </div>
            <div className="modal__stats">
              <h3 className="modal__title">Stats</h3>
              <p className="modal__description">Heigth: <span></span></p>
              <p className="modal__description">Mass: <span></span></p>
            </div>
          </div>
          <div className="modal__relations">
            <div className="modal__relation">
              <h3 className="modal__title">Home world</h3>
              <a className="modal__link"></a>
            </div>
            <div className="modal__relation">
              <h3 className="modal__title">Films</h3>
              <a className="modal__link"></a>
            </div>
            <div className="modal__relation">
              <h3 className="modal__title">Vehicles</h3>
              <a className="modal__link"></a>
            </div>
            <div className="modal__relation">
              <h3 className="modal__title">Starships</h3>
              <a className="modal__link"></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalPeople;