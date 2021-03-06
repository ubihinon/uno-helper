import React from "react";
import './header.styles.scss';
import NewGameButton from "../new-game-button/new-game-button.component.jsx";
import {withRouter} from "react-router-dom";
import StartButton from "../start-button/start-button.component.jsx";

class Header extends React.Component {
    render() {
        return (
            <nav
                className='navbar navbar-expand-lg navbar-light bg-light fixed-top justify-content-between'>
                <h1 className="navbar-brand">UNO helper</h1>
                <div className='navbar-nav'>
                    {this.props.location.pathname !== '/' ? <NewGameButton/> : ''}
                    {this.props.location.pathname === '/' ? <StartButton/> : ''}
                </div>
            </nav>
        )
    }
}

export default withRouter(Header);