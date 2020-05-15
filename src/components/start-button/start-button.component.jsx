import React, {Component} from "react";
import {withRouter} from "react-router-dom";


class StartButton extends Component {
    handleClick = event => {
        event.preventDefault();
        this.props.history.push('/game');
    };

    render() {
        return (
            <input type="button" value='Start' className='btn btn-sm btn-outline-primary' onClick={this.handleClick}/>
        );
    }
}

export default withRouter(StartButton);
