import { connect } from "react-redux";
import Entities from "./Entities";
import setData from "../../store/actions/setData";

const mapStateToProps = (state) => ({
  people: state.people
});

const mapDispatchToProps = (dispatch) => ({
	setData: (data) => dispatch(setData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Entities);