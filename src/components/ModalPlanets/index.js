import { connect } from 'react-redux';
import loadPlanetsTilesData from '../../store/actions/planetsTilesData/loadPlanetsTilesData';
import ModalPlanets from './ModalPlanets';

const mapStateToProps = (state) => ({
	planetsTilesData: state.planetsTilesData.data,
});

const mapDispatchToProps = (dispatch) => ({
	loadPlanetsTilesData: (url) => dispatch(loadPlanetsTilesData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalPlanets);
