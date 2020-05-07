import React from "react";
import './header.styles.scss';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {resetPlayers} from "../../redux/player/player.actions";


class Header extends React.Component {
    handleNewGame = event => {
        this.props.resetPlayers();
    };

    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top justify-content-between'>
                <a href="/" className="navbar-brand">UNO helper</a>
                <div className="collapse navbar-collapse">
                    <ul className='navbar-nav mr-auto'>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/players" className="nav-link">Players</Link>
                        </li>
                    </ul>
                    <button className='btn btn-sm btn-outline-primary' onClick={this.handleNewGame}>New Game</button>
                </div>
            </nav>
        )
    }
}

const mapDispatchToProps = dispatch => ({
   resetPlayers: () => dispatch(resetPlayers())
});

export default connect(null, mapDispatchToProps)(Header);