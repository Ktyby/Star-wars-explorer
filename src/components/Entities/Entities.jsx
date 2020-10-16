import React from "react";
import { connect } from "react-redux";
import "./Entities.css";

class Entities extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <section className="entities">
        <div className="entities__wrapper">
          <ul className="entities__list">
          </ul>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Entities);