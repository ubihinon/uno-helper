import React from "react";
import './game-type.styles.scss';
import {changeGameType} from "../../redux/game-type/game-type.actions";
import {connect} from "react-redux";
import GameTypes from "../../redux/game-type/game-type.consts";

class GameType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: GameTypes.STANDARD
        };
    }

    handleChange = event => {
        const value = event.target.value;
        this.setState(() => {
            this.props.changeGameType(value);
            return {
                value: value
            }
        });
    };

    render() {
        return (
            <div className='card'>
                <div className="card-header">
                    Game type
                </div>
                <div className="card-body">
                    <div className='form-group'>
                        <select name="gameType"
                                id="gameType"
                                value={this.state.value}
                                onChange={this.handleChange}
                                className='form-control form-control-lg'>
                            <option value={GameTypes.STANDARD}>Standard</option>
                            <option value={GameTypes.FAST}>Fast</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    changeGameType: type => dispatch(changeGameType(type))
});

export default connect(null, mapDispatchToProps)(GameType);
