import { connect } from "react-redux";
import EntitiesStarships from "./EntitiesStarships";
import loadStarshipsData from "../../store/actions/starshipsData/loadStarshipsData";
import loadMoreStarshipsData from "../../store/actions/moreStarshipsData/loadMoreStarshipsData";

const mapStateToProps = (state) => ({
  starships: state.starships.data,
  nextPage: state.starships.nextPage
});

const mapDispatchToProps = (dispatch) => ({
  loadStarshipsData: () => dispatch(loadStarshipsData()),
  loadMoreStarshipsData: () => dispatch(loadMoreStarshipsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntitiesStarships);