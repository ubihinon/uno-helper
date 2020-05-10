import GameTypeActionTypes from "./game-type.types";
import GameTypes from "./game-type.consts";

const INITIAL_STATE = {
    gameType: GameTypes.STANDARD
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
