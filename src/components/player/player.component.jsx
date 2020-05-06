import React, {Component} from "react";
import './player.styles.scss';
import {connect} from "react-redux";
import {deletePlayer} from "../../redux/player/player.actions";


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
                <div className="col-auto">
                    <button onClick={() => this.props.deletePlayer(this.props.player)}
                            className='btn'>&#10005;</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    deletePlayer: player => dispatch(deletePlayer(player)),
});

export default connect(null, mapDispatchToProps)(PlayerComponent);