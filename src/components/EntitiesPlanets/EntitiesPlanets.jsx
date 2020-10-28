import PropTypes from 'prop-types';
import React from 'react';
import TilePlanet from '../TilePlanet';
import './EntitiesPlanets.css';

class EntitiesPlanets extends React.PureComponent {
	componentDidMount() {
		this.props.loadPlanetsData();
	}

	renderTiles = () =>
		this.props.planets.map((element, index) => <TilePlanet data={element} key={index} />);

	render() {
		return (
			<section className="entities">
				<ul className="entities__list">{this.renderTiles()}</ul>
				{this.props.nextPage === null || (
					<button
						className="entities__load-button"
						onClick={() => this.props.loadMorePlanetsData(this.props.nextPage)}
					>
						Load More
					</button>
				)}
			</section>
		);
	}
}

EntitiesPlanets.propTypes = {
	loadPlanetsData: PropTypes.func,
	loadMorePlanetsData: PropTypes.func,
	planets: PropTypes.array,
	nextPage: PropTypes.string,
};

EntitiesPlanets.defaultProps = {
	loadPlanetsData: null,
	loadMorePlanetsData: null,
	planets: [],
};

export default EntitiesPlanets;
