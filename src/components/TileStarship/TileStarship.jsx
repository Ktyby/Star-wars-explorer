import PropTypes from 'prop-types';
import React from 'react';
import ModalStarships from '../ModalStarships';
import convertNumberInToString from '../utils/convertNumberInToString';
import getInitials from '../utils/getInitials';
import './TileStarship.css';

class TileStarship extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			isModalShown: false,
		};
	}

	handleShowModalClick = () => {
		this.setState({ isModalShown: true });
	};

	handleModalCloseButtonClick = () => {
		this.setState({ isModalShown: false });
	};

	render() {
		const { data } = this.props;

		return (
			<React.Fragment>
				<li className="entities__item" onClick={() => this.handleShowModalClick()}>
					<div className="entities__initials">{getInitials(data.name)}</div>
					<p className="entities__paragraph">
						Name: <span>{data.name}</span>
					</p>
					<p className="entities__paragraph">
						Cost: <span>{convertNumberInToString(data.cost_in_credits)}</span>
					</p>
					<p className="entities__paragraph">
						Passengers:{' '}
						<span>
							{convertNumberInToString(
								data.passengers.replace(',', '') || +data.passengers.replace(',', '')
							)}
						</span>
					</p>
				</li>
				{this.state.isModalShown && (
					<ModalStarships url={data.url} onCloseButtonClick={this.handleModalCloseButtonClick} />
				)}
			</React.Fragment>
		);
	}
}

TileStarship.propTypes = {
	data: PropTypes.object,
};

TileStarship.defaultProps = {
	data: {},
};

export default TileStarship;
