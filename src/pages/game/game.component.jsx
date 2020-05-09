import React from "react";
import {connect} from "react-redux";
import {addHistory, deleteHistory} from "../../redux/history/history.actions";

class GamePage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    handleValueChange = event => {
        let player = this.props.players.find(player => player.id === parseInt(event.target.getAttribute('id')));
        player.newValue = parseInt(event.target.value);
        this.setState({players: this.props.players});
    };

    save = event => {
        event.preventDefault();

        this.props.addHistory({
            createdAt: Date.now(),
            players: [
                ...this.props.players.map(player => {
                    return {
                        id: player.id,
                        score: player.score,
                    }
                })
            ]
        });

        this.setState(() => {
            let players = this.props.players.map(player => {
                player.score += player.newValue;
                player.newValue = 0;
                return player;
            });

            return {
                players: [...players]
            }
        });
    };

    undo = event => {
        event.preventDefault();
        let history = this.props.history.shift();
        this.setState(() => {
            let players = this.props.players.map(player => {
                if (history) {
                    const historyItem = history.players.find(({id}) => id === player.id);
                    player.score = historyItem.score;
                }
                return player;
            });

            return {
                players: [...players]
            }
        })
    };

    render() {
        return (
            <div>
                <table className='table table-hover'>
                    <thead className='thead-light'>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                        <th>New value</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.players.map(player => (
                            <tr key={player.id}>
                                <td>{player.name}</td>
                                <td>{player.score}</td>
                                <td>
                                    <input type="number"
                                           className='form-control form-control-lg'
                                           min='0'
                                           id={player.id}
                                           onChange={this.handleValueChange}
                                           value={player.newValue}
                                    />
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <button className='btn btn-primary btn-lg btn-block' onClick={this.save}>
                    Save
                </button>
                <button className='btn btn-primary btn-lg btn-block' onClick={this.undo}>
                    UNDO
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addHistory: history => dispatch(addHistory(history)),
    deleteHistory: history => dispatch(deleteHistory(history))
});

const mapStateToProps = state => ({
    players: state.player.players,
    history: state.history.history
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
