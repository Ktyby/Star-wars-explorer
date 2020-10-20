import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
	loadStarshipsData: () => dispatch(loadStarshipsData()),
});

export default connect(null, mapDispatchToProps)(Header);