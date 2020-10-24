import React from "react";
import TilePeople from "../TilePeople";
import "./EntitiesPeople.css";

class EntitiesPeople extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadPeopleData();
  }

  renderTiles = () => {
    return this.props.people.map((element, index) => {
      return <TilePeople name={element.name} birthYear={element.birth_year} gender={element.gender} key={index}/>
    });
  }

  render() {
    if (this.props.nextPage === null) {
      return (
        <section className="entities">
          <ul className="entities__list">
            {this.renderTiles()}
          </ul>
        </section>
      );
    }

    return (
      <section className="entities">
        <ul className="entities__list">
          {this.renderTiles()}
        </ul>
        <button className="entities__load-button" onClick={() => this.props.loadMorePeopleData()}>Load More</button>
      </section>
    );
  }
}

export default EntitiesPeople;