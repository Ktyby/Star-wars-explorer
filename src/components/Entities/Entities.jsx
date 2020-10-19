import React from "react";
import axios from "axios";
import "./Entities.css";

class Entities extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get(`https://swapi.dev/api/people/`).then((response) => {
      this.props.setPeopleData(response.data.results);
    }).catch((error) => {
      console.log(error); 
    });
  }

  renderEntitiesItem = () => {

  }

  render() {
    return (
      <section className="entities">
        <div className="entities__wrapper">
          <ul className="entities__list">
            {this.renderEntitiesItem()}
          </ul>
        </div>
      </section>
    );
  }
}

export default Entities;