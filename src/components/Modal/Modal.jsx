import React from "react";
import "./Modal.css";
import ModalPeople from "../ModalPeople";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isOpen: false,
    }
  }

  closeModal = () => {
    this.setState({
      isOpen: 0,
    });
  }

  render() {
    if (!this.state.isOpen) return null;

    return (
      <div className="modal">
        <div className="modal__wrapper">
          <button className="modal__close-button" onClick={() => this.closeModal()}></button>
          <ModalPeople />
        </div>
        <div className="modal__overlay"></div>
      </div>
    );
  }
}

export default Modal;