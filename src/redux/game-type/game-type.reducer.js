import GameTypeActionTypes from "./game-type.types";

const INITIAL_STATE = {
    gameType: ''
};

const gameTypeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GameTypeActionTypes.CHANGE_GAME_TYPE:
            return {
                ...state,
                gameType: action.payload,
            };
        default:
            return state;
    }
};

export default gameTypeReducer;
