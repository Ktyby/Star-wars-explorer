import React from "react";
import { connect } from "react-redux";
import Entities from "./Entities";

class EntitiesContainer extends React.Component {
  render() {
    return (
      <Entities data={this.props.people}/>
    );
  }
}

const mapStateToProps = (state) => {
  console.log({ people: state.Entities.people })
  return {
    people: state.Entities.people
  };
}

export default connect(mapStateToProps)(EntitiesContainer);