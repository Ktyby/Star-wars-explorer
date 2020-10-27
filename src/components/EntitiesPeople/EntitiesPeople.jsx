import React from "react";
import TilePeople from "../TilePeople";
import PropTypes from "prop-types";

import "./EntitiesPeople.css";

class EntitiesPeople extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadPeopleData();
  }

  renderTiles = () => {
    return this.props.people.map((element, index) => {
      return <TilePeople data={element} key={index}/>
    });
  }

  render() {
    return (
      <section className="entities">
        <ul className="entities__list">
          {this.renderTiles()}
        </ul>
        {this.props.nextPage === null || <button className="entities__load-button" onClick={() => this.props.loadMorePeopleData()}>Load More</button>}
      </section>
    );
  }
}

EntitiesPeople.propTypes = {
  loadPeopleData: PropTypes.func,
  loadMorePeopleData: PropTypes.func,
  people: PropTypes.array,
  nextPage: PropTypes.string
}

EntitiesPeople.defaultProps = {
  loadPeopleData: null,
  loadMorePeopleData: null,
  people: [],
  nextPage: null
};


export default EntitiesPeople;