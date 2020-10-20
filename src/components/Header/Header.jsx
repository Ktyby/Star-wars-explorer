import React from "react";
import axios from "axios";
import logo from "./img/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  handleButtonClick = (selectedSection) => {
    axios.get(`https://swapi.dev/api/${selectedSection}/`).then((response) => {
      response.data.results;
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <header className="header">
        <div className="header__wrapper">
          <img className="header__logo" src={logo} alt="Logo"/>
          <ul className="header__list">
            <li className="header__item" key="people">
              <Link to='/people' className="header__item-link" onClick={() => this.handleButtonClick("people")}>People</Link>
            </li>
            <li className="header__item" key="planets">
              <Link to='/planets' className="header__item-link" onClick={() => this.handleButtonClick("planets")}>Planets</Link>
            </li>
            <li className="header__item" key="starships">
              <Link to='/starships' className="header__item-link" onClick={() => this.handleButtonClick("starships")}>Starships</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;