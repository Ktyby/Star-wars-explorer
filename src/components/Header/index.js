import { connect } from 'react-redux';
import loadPeopleData from '../../store/actions/peopleData/loadPeopleData';
import loadPlanetsData from '../../store/actions/planetsData/loadPlanetsData';
import loadStarshipsData from '../../store/actions/starshipsData/loadStarshipsData';
import Header from './Header';

const mapDispatchToProps = (dispatch) => ({
	loadPeopleData: () => dispatch(loadPeopleData()),
	loadPlanetsData: () => dispatch(loadPlanetsData()),
	loadStarshipsData: () => dispatch(loadStarshipsData()),
});

export default connect(null, mapDispatchToProps)(Header);
