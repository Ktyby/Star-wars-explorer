import { connect } from "react-redux";
import EntitiesPeople from "./EntitiesPeople";
import loadPeopleData from "../../store/actions/peopleData/loadPeopleData";

const mapStateToProps = (state) => ({
  people: state.people.data
});

const mapDispatchToProps = (dispatch) => ({
	loadPeopleData: () => dispatch(loadPeopleData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntitiesPeople);