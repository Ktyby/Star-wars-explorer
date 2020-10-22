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
    return (
      <section className="entities">
        <div className="entities__wrapper">
          <ul className="entities__list">
            {this.renderTiles()}
          </ul>
        </div>
        <button className="entities__load-button">Load More</button>
      </section>
    );
  }
}

export default EntitiesPeople;