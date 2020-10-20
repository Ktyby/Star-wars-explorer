import { connect } from "react-redux";
import EntitiesStarships from "./EntitiesStarships";
import loadStarshipsData from "../../store/actions/starshipsData/loadStarshipsData";

const mapStateToProps = (state) => ({
  starships: state.starships.data
});

const mapDispatchToProps = (dispatch) => ({
	loadStarshipsData: () => dispatch(loadStarshipsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntitiesStarships);