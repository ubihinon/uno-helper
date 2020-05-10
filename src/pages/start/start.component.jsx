import React from "react";
import './start.styles.scss';
import GameType from "../../components/game-type/game-type.component.jsx";

class StartPage extends React.Component {
    handleSubmit = event => {
        event.preventDefault();
        this.props.history.push('/game');
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='col-12'>
                <div className='col'>
                    <div className='row'>
                        <GameType/>
                    </div>
                    <div className='row'>
                        <input type="submit" value='Start' className='btn btn-primary btn-block btn-lg'/>
                    </div>
                </div>
            </form>
        )
    }
}

export default StartPage;
