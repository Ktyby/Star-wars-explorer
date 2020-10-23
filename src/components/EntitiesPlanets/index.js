import { connect } from "react-redux";
import EntitiesPlanets from "./EntitiesPlanets";
import loadPlanetsData from "../../store/actions/planetsData/loadPlanetsData";
import loadMorePlanetsData from "../../store/actions/morePlanetsData/loadMorePlanetsData";

const mapStateToProps = (state) => ({
  planets: state.planets.data,
});

const mapDispatchToProps = (dispatch) => ({
  loadPlanetsData: () => dispatch(loadPlanetsData()),
  loadMorePlanetsData: () => dispatch(loadMorePlanetsData())
});

export default connect(mapStateToProps, mapDispatchToProps)(EntitiesPlanets);