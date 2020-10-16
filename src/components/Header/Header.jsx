import React from "react";
import axios from "axios";
import getData from "../../store/actions/getData";
import logo from "./img/logo.png";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      section: "people",
    }
  }

  handleButtonClick = (selectedSection) => {
    this.setState({
      section: selectedSection
    });
    
    axios.get(`https://swapi.dev/api/${selectedSection}/`).then((response) => {
      getData(response.data.results);
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
              <button className="header__item-button" onClick={() => this.handleButtonClick("people")}>People</button>
            </li>
            <li className="header__item" key="planets">
              <button className="header__item-button" onClick={() => this.handleButtonClick("planets")}>Planets</button>
            </li>
            <li className="header__item" key="starships">
              <button className="header__item-button" onClick={() => this.handleButtonClick("starships")}>Starships</button>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;