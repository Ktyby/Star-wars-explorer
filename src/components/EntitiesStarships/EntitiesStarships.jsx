import PropTypes from 'prop-types';
import React from 'react';
import TileStarship from '../TileStarship';
import './EntitiesStarships.css';

class EntitiesStarships extends React.PureComponent {
	componentDidMount() {
		this.props.loadStarshipsData();
	}

	renderTiles = () =>
		this.props.starships.map((element, index) => <TileStarship data={element} key={index} />);

	render() {
		return (
			<section className="entities">
				<ul className="entities__list">{this.renderTiles()}</ul>
				{this.props.nextPage === null || (
					<button
						className="entities__load-button"
						onClick={() => this.props.loadMoreStarshipsData(this.props.nextPage)}
					>
						Load More
					</button>
				)}
			</section>
		);
	}
}

EntitiesStarships.propTypes = {
	loadStarshipsData: PropTypes.func,
	loadMoreStarshipsData: PropTypes.func,
	starships: PropTypes.array,
	nextPage: PropTypes.string,
};

EntitiesStarships.defaultProps = {
	loadStarshipsData: null,
	loadMoreStarshipsData: null,
	starships: [],
};

export default EntitiesStarships;
