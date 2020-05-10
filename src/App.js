import React from 'react';
import './App.scss';
import {Route, Switch} from "react-router-dom";
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
                </Switch>
            </div>
        );
    }
}

export default App;
