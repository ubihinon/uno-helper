import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import PlayersPage from "./pages/players/players.component.jsx";
import GamePage from "./pages/game/game.component.jsx";
import Header from "./components/header/header.component.jsx";
import StartPage from "./pages/start/start.component.jsx";

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Header/>
                <Switch>
                    <Route exact path='/' component={StartPage}/>
                    <Route exact path='/game' component={GamePage}/>
                    <Route exact path='/players' component={PlayersPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
