import PropTypes from 'prop-types';
import React from 'react';
import { PEOPLE_API_URL } from '../../constants';
import Modal from '../Modal';
import ModalPeople from '../ModalPeople';
import renderLinks from '../utils/renderLinks';
import './ModalPlanets.css';

class ModalPlanets extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			isShowPeopleModal: false,
			url: null,
		};
	}

	setStateDependingOnUrl = (url) => {
		if (url.includes(PEOPLE_API_URL)) {
			this.setState({
				isShowPeopleModal: true,
				url,
			});
		}
	};

	componentDidMount() {
		this.props.loadPlanetsTilesData(this.props.url);
	}

	render() {
		const { planetsTilesData } = this.props;

		return (
			<Modal name={planetsTilesData.name} onCloseButtonClick={this.props.onCloseButtonClick}>
				<div className="modal__content">
					<div className="modal__information">
						<div className="modal__characteristic">
							<div className="modal__stats">
								<h3 className="modal__title">Stats</h3>
								<p className="modal__description">
									Rotation period: <span>{planetsTilesData.rotation_period}</span>
								</p>
								<p className="modal__description">
									Orbital period: <span>{planetsTilesData.orbital_period}</span>
								</p>
								<p className="modal__description">
									Diameter: <span>{planetsTilesData.diameter}</span>
								</p>
								<p className="modal__description">
									Climate: <span>{planetsTilesData.climate}</span>
								</p>
								<p className="modal__description">
									Gravity: <span>{planetsTilesData.gravity}</span>
								</p>
								<p className="modal__description">
									Terrain: <span>{planetsTilesData.terrain}</span>
								</p>
								<p className="modal__description">
									Surface water: <span>{planetsTilesData.surface_water}</span>
								</p>
								<p className="modal__description">
									Population: <span>{planetsTilesData.population}</span>
								</p>
							</div>
						</div>
						<div className="modal__relations">
							<div className="modal__relation">
								<h3 className="modal__title">Residents</h3>
								{renderLinks(planetsTilesData.residents, this.setStateDependingOnUrl)}
								{this.state.isShowPeopleModal && (
									<ModalPeople
										url={this.state.url}
										onCloseButtonClick={() => this.props.onCloseButtonClick()}
									/>
								)}
							</div>
							<div className="modal__relation">
								<h3 className="modal__title">Films</h3>
								{renderLinks(planetsTilesData.films, this.setStateDependingOnUrl)}
							</div>
						</div>
					</div>
				</div>
			</Modal>
		);
	}
}

ModalPlanets.propTypes = {
	loadPlanetsTilesData: PropTypes.func,
	planetsTilesData: PropTypes.object,
	onCloseButtonClick: PropTypes.func,
	url: PropTypes.string,
};

ModalPlanets.defaultProps = {
	loadPlanetsTilesData: {},
	url: null,
};

export default ModalPlanets;
