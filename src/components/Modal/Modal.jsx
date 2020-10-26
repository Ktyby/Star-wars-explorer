import React from "react";
import "./Modal.css";
import ModalPeople from "../ModalPeople";

class Modal extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      isOpen: true,
    }
  }

  componentDidMount() {
    this.props.loadPeopleTilesData(this.props.url);
  }

  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    if (!this.state.isOpen) return null;

    return (
      <div className="modal">
        <div className="modal__wrapper">
          <h2 className="modal__name">{this.props.tilesData.name}</h2>
          <button className="modal__close-button" onClick={() => this.closeModal()}></button>
          <ModalPeople data={this.props.tilesData}/>
        </div>
        <div className="modal__overlay"></div>
      </div>
    );
  }
}

export default Modal;