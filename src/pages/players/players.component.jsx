import React from "react";
import {connect} from "react-redux";
import {addPlayer} from "../../redux/player/player.actions";
import PlayerComponent from "../../components/player/player.component.jsx";


class PlayersPage extends React.Component {
    handleAddName = event => {
        event.preventDefault();
        this.props.addPlayer({
            id: this.props.players.length > 0 ? Math.max.apply(Math, this.props.players.map(o => o.id)) + 1 : 1,
            name: '',
            value: 0,
            newValue: 0
        });
    };

    render() {
        return (
            <form action="">
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
                        <button onClick={this.handleAddName} className='btn btn-primary btn-lg btn-block'>+
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    addPlayer: player => dispatch(addPlayer(player)),
});

const mapStateToProps = state => ({
    players: state.player.players
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayersPage);