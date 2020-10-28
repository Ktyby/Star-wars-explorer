import PropTypes from 'prop-types';
import React from 'react';
import TilePeople from '../TilePeople';
import './EntitiesPeople.css';

class EntitiesPeople extends React.PureComponent {
	componentDidMount() {
		this.props.loadPeopleData();
	}

	renderTiles = () =>
		this.props.people.map((element, index) => <TilePeople data={element} key={index} />);

	render() {
		return (
			<section className="entities">
				<ul className="entities__list">{this.renderTiles()}</ul>
				{this.props.nextPage === null || (
					<button
						className="entities__load-button"
						onClick={() => this.props.loadMorePeopleData(this.props.nextPage)}
					>
						Load More
					</button>
				)}
			</section>
		);
	}
}

EntitiesPeople.propTypes = {
	loadPeopleData: PropTypes.func,
	loadMorePeopleData: PropTypes.func,
	people: PropTypes.array,
	nextPage: PropTypes.string,
};

EntitiesPeople.defaultProps = {
	loadPeopleData: () => {},
	loadMorePeopleData: () => {},
	people: [],
};

export default EntitiesPeople;
