import React from "react";
import "./TilePeople.css";
import propTypes from "./propTypes";
import getInitials from "../utils/getInitials";
import Modal from "../Modal";

class TilePeople extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }
  }

  handleShowModalClick = () => {
    this.setState({showModal: !this.state.showModal});
  }

  render() {
    return (
      <li className="entities__item" onClick={this.handleShowModalClick}>
        <div className="entities__initials">{getInitials(this.props.data.name)}</div>
        <p className="entities__paragraph">Name: <span>{this.props.data.name}</span></p>
        <p className="entities__paragraph">Birth year: <span>{this.props.data.birth_year}</span></p>
        <p className="entities__paragraph">Gender: <span>{this.props.data.gender}</span></p>
        { this.state.showModal && <Modal handleModal={this.handleShowModalClick} url={this.props.data.url}/> }
      </li>
    );
  }
}

TilePeople.propTypes = propTypes;

export default TilePeople;
