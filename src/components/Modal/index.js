import { connect } from "react-redux";
import loadPeopleTilesData from "../../store/actions/peopleTilesData/loadPeopleTilesData";
import Modal from "./Modal";

const mapStateToProps = (state) => ({
  peopleTilesData: state.peopleTilesData.data,
});

const mapDispatchToProps = (dispatch) => ({
  loadPeopleTilesData: (url) => dispatch(loadPeopleTilesData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);