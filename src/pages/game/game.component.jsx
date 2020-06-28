import React from "react";
import './game.styles.scss'
import {connect} from "react-redux";
import {addHistory, deleteHistory} from "../../redux/history/history.actions";
import GameOver from "../../components/game-over/game-over.component.jsx";
import GameTypes from "../../redux/game-type/game-type.consts";
import {updatePlayersScore} from "../../redux/player/player.actions";


class GamePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winnerOrLoser: ''
        };
    }

    handleValueChange = event => {
        let player = this.props.players.find(player => player.id === parseInt(event.target.getAttribute('id')));
        player.newValue = parseInt(event.target.value);
        this.setState({players: this.props.players});
    };

    onKeyDown = event => {
        if (event.key === 'Enter') {
            this.save(event);
        }
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
        this.props.updatePlayersScore();
        this.checkWinnerOrLoser();
    };

    checkWinnerOrLoser = () => {
        const maxScorePlayer = this.getPlayerWithMaxScore();
        if (this.props.gameType === GameTypes.STANDARD) {

            if (maxScorePlayer.score >= 500) {
                this.setState({winnerOrLoser: maxScorePlayer});
            }
        } else {
            if (maxScorePlayer.score >= 200) {
                this.setState({winnerOrLoser: maxScorePlayer});
            }
        }
    };

    getPlayerWithMaxScore = () => {
        return this.props.players.reduce((prev, current) => (prev.score > current.score) ? prev : current)
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
        if (this.state.winnerOrLoser) {
            let message = '';
            if (this.props.gameType === GameTypes.STANDARD) {
                message = 'won :)';
            } else {
                message = 'failed :(';
            }
            return (
                <GameOver winnerOrLoser={this.state.winnerOrLoser} message={message}/>
            )
        }
        return (
            <form onKeyDown={this.onKeyDown} onSubmit={this.save}>
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
                                           value={player.newValue > 0 ? player.newValue : ''}
                                    />
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <div className='d-flex justify-content-between action-buttons'>
                    <button className='btn btn-lg btn-danger' onClick={this.undo}>
                        Undo
                    </button>
                    <button type="submit" className='btn btn-primary btn-lg col-3'>
                        Save
                    </button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addHistory: history => dispatch(addHistory(history)),
    deleteHistory: history => dispatch(deleteHistory(history)),
    updatePlayersScore: () => dispatch(updatePlayersScore())
});

const mapStateToProps = state => ({
    players: state.player.players,
    history: state.history.history,
    gameType: state.gameType.gameType,
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
