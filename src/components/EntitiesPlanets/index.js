import { connect } from 'react-redux';
import EntitiesPlanets from './EntitiesPlanets';
import loadPlanetsData from '../../store/actions/planetsData/loadPlanetsData';
import loadMorePlanetsData from '../../store/actions/morePlanetsData/loadMorePlanetsData';

const mapStateToProps = (state) => ({
	planets: state.planets.data,
	nextPage: state.planets.nextPage,
});

const mapDispatchToProps = (dispatch) => ({
	loadPlanetsData: () => dispatch(loadPlanetsData()),
	loadMorePlanetsData: (nextPage) => dispatch(loadMorePlanetsData(nextPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntitiesPlanets);
