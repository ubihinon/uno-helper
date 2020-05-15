import React from "react";
import './start.styles.scss';
import GameType from "../../components/game-type/game-type.component.jsx";
import Players from "../../components/players/players.component.jsx";

class StartPage extends React.Component {
    render() {
        return (
            <form className='col-12'>
                <div className='form-group'>
                    <GameType/>
                </div>
                <div className='form-group'>
                    <Players/>
                </div>
            </form>
        )
    }
}

export default StartPage;
