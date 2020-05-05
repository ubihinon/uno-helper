import React from "react";
import './header.styles.scss';
import {Link} from "react-router-dom";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
                <a href="/" className="navbar-brand">UNO helper</a>
                <div className="collapse navbar-collapse">
                    <ul className='navbar-nav mr-auto'>
                        <li className="nav-link">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/players" className="nav-link">Players</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}