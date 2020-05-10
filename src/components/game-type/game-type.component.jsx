import React from "react";
import './game-type.styles.scss';
import {changeGameType} from "../../redux/game-type/game-type.actions";
import {connect} from "react-redux";

class GameType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'standard'};
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

            <div className='form-group col-12'>
                <label htmlFor="gameType">Game type</label>
                <select name="gameType"
                        id="gameType"
                        value={this.state.value}
                        onChange={this.handleChange}
                        className='form-control form-control-lg'>
                    <option value="standard">Standard</option>
                    <option value="fast">Fast</option>
                </select>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    changeGameType: type => dispatch(changeGameType(type))
});

export default connect(null, mapDispatchToProps)(GameType);
