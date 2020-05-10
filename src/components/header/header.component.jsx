import React from "react";
import './header.styles.scss';
import {Link} from "react-router-dom";
import NewGameButton from "../new-game-button/new-game-button.component.jsx";

class Header extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top justify-content-between'>
                <a href="/" className="navbar-brand">UNO helper</a>
                <div className="collapse navbar-collapse">
                    <ul className='navbar-nav mr-auto'>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                    </ul>
                    <NewGameButton/>
                </div>
            </nav>
        )
    }
}

export default Header;