import React, {Component} from "react";
import './player.styles.scss';
import {connect} from "react-redux";
import {deletePlayer} from "../../redux/player/player.actions";

const MIN_PLAYERS = 2;

class PlayerComponent extends Component {
    handleNameChange = event => {
        this.props.player.name = event.target.value;
        this.setState({player: this.props.player}, () => console.log(this.state));
    };

    render() {
        return (
            <div className="row">
                <div className="col">
                    <input id={this.props.player.id} type="text" maxLength='50' placeholder='Name'
                           onChange={this.handleNameChange}
                           value={this.props.player.name}
                           className='form-control form-control-lg'/>
                </div>
                <button onClick={this.deletePlayerIfNeeded}
                        className={`btn btn-lg btn-delete ${this.isMinPlayerCount() ? 'hidden': ''}`}>
                    &#10005;
                </button>
            </div>
        );
    }

    deletePlayerIfNeeded = event => {
        event.preventDefault();
        if (this.isMinPlayerCount()) {
            return
        }
        this.props.deletePlayer(this.props.player);
    };

    isMinPlayerCount = () => {
        return this.props.players.length <= MIN_PLAYERS;
    };
}

const mapDispatchToProps = dispatch => ({
    deletePlayer: player => dispatch(deletePlayer(player)),
});

const mapStateToProps = state => ({
    players: state.player.players
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerComponent);