import { connect } from "react-redux";
import loadStarshipsTilesData from "../../store/actions/starshipsTilesData/loadStarshipsTilesData";
import ModalStarships from "./ModalStarships";

const mapStateToProps = (state) => ({
  starshipsTilesData: state.starshipsTilesData.data,
});

const mapDispatchToProps = (dispatch) => ({
  loadStarshipsTilesData: (url) => dispatch(loadStarshipsTilesData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalStarships);