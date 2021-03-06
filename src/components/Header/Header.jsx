import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './img/logo.png';

class Header extends React.PureComponent {
	render() {
		return (
			<header className="header">
				<img className="header__logo" src={logo} alt="Logo" />
				<nav>
					<ul className="header__list">
						<li className="header__item" key="people">
							<Link
								to="/people"
								className="header__item-link"
								onClick={() => this.props.loadPeopleData}
							>
								People
							</Link>
						</li>
						<li className="header__item" key="planets">
							<Link
								to="/planets"
								className="header__item-link"
								onClick={() => this.props.loadPlanetsData}
							>
								Planets
							</Link>
						</li>
						<li className="header__item" key="starships">
							<Link
								to="/starships"
								className="header__item-link"
								onClick={() => this.props.loadStarshipsData}
							>
								Starships
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

Header.propTypes = {
	loadPeopleData: PropTypes.func,
	loadPlanetsData: PropTypes.func,
	loadStarshipsData: PropTypes.func,
};

Header.defaultProps = {
	loadPeopleData: null,
	loadPlanetsData: null,
	loadStarshipsData: null,
};

export default Header;
