import PropTypes from 'prop-types';
import React from 'react';
import { PLANETS_API_URL, STARSHIPS_API_URL } from '../../constants';
import Modal from '../Modal';
import ModalPlanets from '../ModalPlanets';
import ModalStarships from '../ModalStarships';
import renderLinks from '../utils/renderLinks';
import './ModalPeople.css';

class ModalPeople extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			url: null,
			isShowPlanetsModal: false,
			isShowStarshipsModal: false,
		};
	}

	componentDidMount() {
		this.props.loadPeopleTilesData(this.props.url);
	}

	setStateDependingOnUrl = (url) => {
		if (url.includes(PLANETS_API_URL)) {
			this.setState({ isShowPlanetsModal: true });
		} else if (url.includes(STARSHIPS_API_URL)) {
			this.setState({
				isShowStarshipsModal: true,
				url,
			});
		}
	};

	render() {
		const { peopleTilesData } = this.props;
		return (
			<Modal name={peopleTilesData.name} onCloseButtonClick={this.props.onCloseButtonClick}>
				<div className="modal__content">
					<div className="modal__information">
						<div className="modal__characteristic">
							<div className="modal__appearance">
								<h3 className="modal__title">Appearence</h3>
								<p className="modal__description">
									Hair color: <span>{peopleTilesData.hair_color}</span>
								</p>
								<p className="modal__description">
									Skin color: <span>{peopleTilesData.skin_color}</span>
								</p>
								<p className="modal__description">
									Eye color: <span>{peopleTilesData.eye_color}</span>
								</p>
								<p className="modal__description">
									Gender: <span>{peopleTilesData.gender}</span>
								</p>
							</div>
							<div className="modal__stats">
								<h3 className="modal__title">Stats</h3>
								<p className="modal__description">
									Height: <span>{peopleTilesData.height}</span>
								</p>
								<p className="modal__description">
									Mass: <span>{peopleTilesData.mass}</span>
								</p>
							</div>
						</div>
						<div className="modal__relations">
							<div className="modal__relation">
								<h3 className="modal__title">Home world</h3>
								{peopleTilesData.homeworld && (
									<a
										className="modal__link"
										onClick={() => this.setStateDependingOnUrl(peopleTilesData.homeworld.url)}
									>
										{peopleTilesData.homeworld.name}
									</a>
								)}
								{this.state.isShowPlanetsModal && (
									<ModalPlanets
										url={peopleTilesData.homeworld.url}
										onCloseButtonClick={() => this.props.onCloseButtonClick()}
									/>
								)}
							</div>
							<div className="modal__relation">
								<h3 className="modal__title">Films</h3>
								{renderLinks(peopleTilesData.films, this.setStateDependingOnUrl)}
							</div>
							<div className="modal__relation">
								<h3 className="modal__title">Vehicles</h3>
								{renderLinks(peopleTilesData.vehicles, this.setStateDependingOnUrl)}
							</div>
							<div className="modal__relation">
								<h3 className="modal__title">Starships</h3>
								{renderLinks(peopleTilesData.starships, this.setStateDependingOnUrl)}
								{this.state.isShowStarshipsModal && (
									<ModalStarships
										url={this.state.url}
										onCloseButtonClick={() => this.props.onCloseButtonClick()}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</Modal>
		);
	}
}

ModalPeople.propTypes = {
	loadPeopleTilesData: PropTypes.func,
	peopleTilesData: PropTypes.object,
	onCloseButtonClick: PropTypes.func,
	url: PropTypes.string,
};

ModalPeople.defaultProps = {
	loadPeopleTilesData: {},
	url: null,
};

export default ModalPeople;
