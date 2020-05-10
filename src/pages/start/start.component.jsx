import React from "react";
import './start.styles.scss';
import GameType from "../../components/game-type/game-type.component.jsx";
import Players from "../../components/players/players.component.jsx";

class StartPage extends React.Component {
    handleSubmit = event => {
        event.preventDefault();
        this.props.history.push('/game');
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='col-12'>
                <div className='form-group'>
                    <GameType/>
                </div>
                <div className='form-group'>
                    <Players/>
                </div>
                <input type="submit" value='Start' className='btn btn-primary btn-block btn-lg'/>
            </form>
        )
    }
}

export default StartPage;
