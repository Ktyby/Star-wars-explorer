import { connect } from "react-redux";
import EntitiesPeople from "./EntitiesPeople";
import loadPeopleData from "../../store/actions/peopleData/loadPeopleData";
import loadMorePeopleData from "../../store/actions/morePeopleData/loadMorePeopleData";

const mapStateToProps = (state) => ({
  people: state.people.data,
  nextPage: state.people.nextPage
});

const mapDispatchToProps = (dispatch) => ({
  loadPeopleData: () => dispatch(loadPeopleData()),
  loadMorePeopleData: () => dispatch(loadMorePeopleData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntitiesPeople);