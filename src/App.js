import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import PlayersPage from "./pages/players/players.component.jsx";
import GamePage from "./pages/game/game.component.jsx";
import Header from "./components/header/header.component.jsx";

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Header/>

                <Switch>
                    <Route exact path='/'>
                        <GamePage/>
                    </Route>
                    <Route exact path='/players'>
                        <PlayersPage/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default App;
