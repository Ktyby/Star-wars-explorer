import { connect } from "react-redux";
import EntitiesPlanets from "./EntitiesPlanets";
import loadPlanetsData from "../../store/actions/planetsData/loadPlanetsData";

const mapStateToProps = (state) => ({
  planets: state.planets.data
});

const mapDispatchToProps = (dispatch) => ({
	loadPlanetsData: () => dispatch(loadPlanetsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntitiesPlanets);