import PlayerActionTypes from "./player.types";

const INITIAL_STATE = {
    players: [
        {
            id: 1,
            name: 'Karina',
            score: 0,
            newValue: 0,
        },
        {
            id: 2,
            name: 'Stacy',
            score: 0,
            newValue: 0,
        }
    ]
};

const playerReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case PlayerActionTypes.ADD_PLAYER:
            return {
                ...state,
                players: [...state.players, action.payload],
            };
        case PlayerActionTypes.DELETE_PLAYER:
            return {
                ...state,
                players: state.players.filter(player => player.id !== action.payload.id)
            };
        default:
            return state;
    }
};

export default playerReducer;
