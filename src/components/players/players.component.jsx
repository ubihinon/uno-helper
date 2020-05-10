import React from "react";
import {connect} from "react-redux";
import {addPlayer} from "../../redux/player/player.actions";
import PlayerComponent from "../player/player.component.jsx";

const MAX_PLAYERS = 10;
const MIN_PLAYERS = 2;


class Players extends React.Component {
    handleAddName = event => {
        event.preventDefault();
        if (this.isMaxPlayerCount()) {
            return;
        }
        const id = this.props.players.length > 0 ? Math.max.apply(Math, this.props.players.map(o => o.id)) + 1 : 1;
        this.props.addPlayer({
            id: id,
            name: `Player ${id}`,
            score: 0,
            newValue: 0
        });
    };

    render() {
        return (
            <div className='card'>
                <div className="card-header">
                    Players
                </div>
                <div className="card-body">
                    {
                        this.props.players.map(player => (
                            <div className='form-group' key={player.id}>
                                <PlayerComponent player={player}/>
                            </div>
                        ))
                    }
                    <div className='d-flex justify-content-end'>
                        <button onClick={this.handleAddName}
                                className={`${this.isMaxPlayerCount() ? 'disabled' : ''} btn btn-primary col-2`}>
                            +
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    isMaxPlayerCount = () => {
        return this.props.players.length >= MAX_PLAYERS;
    };

    isMinPlayerCount = () => {
        return this.props.players.length <= MIN_PLAYERS;
    };
}


const mapDispatchToProps = dispatch => ({
    addPlayer: player => dispatch(addPlayer(player)),
});

const mapStateToProps = state => ({
    players: state.player.players
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);