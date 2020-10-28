import PropTypes from "prop-types";
import React from "react";
import ModalPeople from "../ModalPeople";
import getInitials from "../utils/getInitials";
import "./TilePeople.css";

class TilePeople extends React.PureComponent {
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
      <li className="entities__item" onClick={() => this.handleShowModalClick()}>
        <div className="entities__initials">{getInitials(data.name)}</div>
        <p className="entities__paragraph">Name: <span>{data.name}</span></p>
        <p className="entities__paragraph">Birth year: <span>{data.birth_year}</span></p>
        <p className="entities__paragraph">Gender: <span>{data.gender}</span></p>
        {this.state.isModalShown && <ModalPeople url={data.url} onCloseButtonClick={() => {this.setState({ isModalShown: false })}} />}
      </li>
    );
  }
}

TilePeople.propTypes = {
  data: PropTypes.object,
}

TilePeople.defaultProps = {
  data: {},
};

export default TilePeople;
