import React from "react";
import TileStarship from "../TileStarship";
import "./EntitiesStarships.css";
import PropTypes from "prop-types";

class EntitiesStarships extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadStarshipsData();
  }

  renderTiles = () => {
    return this.props.starships.map((element, index) => {
      return <TileStarship data={element} key={index}/>
    });
  }

  render() {
    return (
      <section className="entities">
        <ul className="entities__list">
          {this.renderTiles()}
        </ul>
         {this.props.nextPage === null || <button className="entities__load-button" onClick={() => this.props.loadMoreStarshipsData()}>Load More</button>}
      </section>
    );
  }
}

EntitiesStarships.propTypes = {
  loadStarshipsData: PropTypes.func,
  loadMoreStarshipsData: PropTypes.func,
  starships: PropTypes.array,
  nextPage: PropTypes.string
}

EntitiesStarships.defaultProps = {
  loadStarshipsData: null,
  loadMoreStarshipsData: null,
  starships: [],
  nextPage: null
};

export default EntitiesStarships;