import React from "react";
import logo from "./img/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="header">
        <div className="header__wrapper">
          <img className="header__logo" src={logo} alt="Logo"/>
          <ul className="header__list">
            <li className="header__item" key="people">
              <Link to='/people' className="header__item-link" onClick={() => this.props.loadPeopleData}>People</Link>
            </li>
            <li className="header__item" key="planets">
              <Link to='/planets' className="header__item-link" onClick={() => this.props.loadPlanetsData}>Planets</Link>
            </li>
            <li className="header__item" key="starships">
              <Link to='/starships' className="header__item-link" onClick={() => this.props.loadStarshipsData}>Starships</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;