import React from "react";
import './start.styles.scss';
import GameType from "../../components/game-type/game-type.component.jsx";
import Players from "../../components/players/players.component.jsx";

class StartPage extends React.Component {
    render() {
        return (
            <form>
                <GameType/>
                <Players/>
            </form>
        )
    }
}

export default StartPage;
