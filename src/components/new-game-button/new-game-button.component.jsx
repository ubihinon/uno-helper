import React from "react";
import {Link} from "react-router-dom";
import {resetPlayers} from "../../redux/player/player.actions";
import {clearHistory} from "../../redux/history/history.actions";
import {connect} from "react-redux";


class NewGameButton extends React.Component {
    handleNewGame = event => {
        this.props.resetPlayers();
        this.props.clearHistory();
        $('#newGameConfirmationModal').modal('hide');
    };

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal"
                        data-target="#newGameConfirmationModal">
                    New Game
                </button>

                <div className="modal fade" id="newGameConfirmationModal" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Start a new game</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                All your current progress will be lost. Are you sure do you want to start a new game?
                            </div>
                            <div className="modal-footer">
                                <Link to="/" className="btn btn-secondary" onClick={this.handleNewGame}>Yes</Link>
                                <button type="button" className="btn btn-primary" data-dismiss="modal">No</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    resetPlayers: () => dispatch(resetPlayers()),
    clearHistory: () => dispatch(clearHistory())
});

export default connect(null, mapDispatchToProps)(NewGameButton);