import { connect } from "react-redux";
import Entities from "./Entities";
import setPeopleData from "../../store/actions/setPeopleData";

const mapStateToProps = (state) => ({
  people: state.people
});

const mapDispatchToProps = (dispatch) => ({
	setPeopleData: (data) => dispatch(setPeopleData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Entities);