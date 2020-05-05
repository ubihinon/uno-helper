import React from "react";
import {connect} from "react-redux";
import {addPlayer, deletePlayer} from "../../redux/player/player.actions";

// class PlayersPage extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     console.log(props);
//     //     this.state = props.state;
//     //     // this.state = {
//     //     //     players: []
//     //     // }
//     // }
//
//     // handleNameChange = event => {
//     //     let player = this.state.players.find(player => player.id === parseInt(event.target.getAttribute('id')));
//     //     player.name = event.target.value;
//     //     this.setState({players: this.props.state.players}, () => console.log(this.state));
//     // };
//     //
//     // addPlayer = event => {
//     //     event.preventDefault();
//     //     // event.stopPropagation();
//     //     console.log(`addPlayer`);
//     //     // const {players} = this.state;
//     //     const player = {
//     //         id:  this.props.state.length > 0 ? Math.max.apply(Math, this.state.map(o => o.id)) + 3 : 3,
//     //         name: '',
//     //         score: 0,
//     //         newValue: 0
//     //     };
//     //     // this.setState(() => {
//     //     //     this.state.push(player);
//     //     //     return {players: [...this.state.players, player]}
//     //     // });
//     //     this.setState({
//     //         players:  [...this.props.state.players, player]
//     //     });
//     //         // const {players} = state;
//     //         // console.log(`STATE`);
//     //         // let player = {
//     //         //     id: players.length > 0 ? Math.max.apply(Math, players.map(o => o.id)) + 1 : 1,
//     //         //     name: '',
//     //         //     score: 0
//     //         // };
//     //         // state.players.push(player);
//     // };
//
//     deletePlayer = (event, idToDelete) => {
//         event.preventDefault();
//         this.setState(state => {
//             const players = this.props.state.players.filter(player => player.id !== idToDelete);
//             return {
//                 players
//             };
//         }, () => console.log(this.state));
//     };
//
//     render() {
//         const {players} = this.props.state;
//         return (
//             <form action="">
//                 <div className='card'>
//                     <div className="card-header">
//                         Players
//                     </div>
//                     <div className="card-body">
//                         {
//                             this.props.state.players.map(player => (
//                                 <div className='form-group' key={player.id}>
//                                     <div className="row">
//                                         <div className="col">
//                                             <input id={player.id} type="text" maxLength='50' placeholder='Name'
//                                                    // onChange={this.handleNameChange}
//                                                    value={player.name}
//                                                    className='form-control form-control-lg'/>
//                                         </div>
//                                         <div className="col-auto">
//                                             <button onClick={(event) => this.deletePlayer(event, player.id)}
//                                                     className='btn'>&#10005;</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))
//                         }
//                         <button onClick={this.addPlayer} className='btn btn-primary btn-lg btn-block'>+</button>
//                     </div>
//                 </div>
//             </form>
//
//         )
//     }
// }

// const PlayersPage = ({players}) => {
//     console.log(players);
//     return (
//         <form action="">
//             <div className='card'>
//                 <div className="card-header">
//                     Players
//                 </div>
//                 <div className="card-body">
//                     {/*<input type="text" maxLength='50' placeholder='Name'*/}
//                     {/*    onChange={(e) => addPlayer({id: 1, name: e.target.value, value: 0, newValue: 0})}*/}
//                     {/*       className='form-control form-control-lg'/>*/}
//
//                     {
//                         players.map(player => (
//                             <div className='form-group' key={player.id}>
//                                 <div className="row">
//                                     <div className="col">
//                                         <input id={player.id} type="text" maxLength='50' placeholder='Name'
//                                             // onChange={this.handleNameChange}
//                                             onChange={(v) => {v.preventDefault(); console.log(v.target.value)}}
//                                                value={player.name}
//                                                className='form-control form-control-lg'/>
//                                     </div>
//                                     {/*<div className="col-auto">*/}
//                                     {/*    <button onClick={(event) => this.deletePlayer(event, player.id)}*/}
//                                     {/*            className='btn'>&#10005;</button>*/}
//                                     {/*</div>*/}
//                                 </div>
//                             </div>
//                         ))
//                     }
//                     <button onClick={addPlayer} className='btn btn-primary btn-lg btn-block'>+</button>
//                 </div>
//             </div>
//         </form>
//
//     )
// };


class PlayersPage extends React.Component {
    constructor(props) {
        super(props);
    }

    handleNameChange = event => {
        let player = this.props.players.find(player => player.id === parseInt(event.target.getAttribute('id')));
        player.name = event.target.value;
        this.setState({players: this.props.players}, () => console.log(this.state));
    };

    handleAddName = event => {
        event.preventDefault();
        this.props.addPlayer({
            // id: 3,
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
                                    <div className="row">
                                        <div className="col">
                                            <input id={player.id} type="text" maxLength='50' placeholder='Name'
                                                   onChange={this.handleNameChange}
                                                   value={player.name}
                                                   className='form-control form-control-lg'/>
                                        </div>
                                        <div className="col-auto">
                                            <button onClick={() => this.props.deletePlayer(player)}
                                                    className='btn'>&#10005;</button>
                                        </div>
                                    </div>
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
};


const mapDispatchToProps = dispatch => ({
    addPlayer: player => dispatch(addPlayer(player)),
    deletePlayer: player => dispatch(deletePlayer(player)),
});

const mapStateToProps = state => ({
    players: state.player.players
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayersPage);