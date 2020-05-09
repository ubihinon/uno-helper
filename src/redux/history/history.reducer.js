import PlayerActionTypes from "./history.types";

const INITIAL_STATE = {
    history: []
};

const historyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PlayerActionTypes.ADD_HISTORY:
            return {
                ...state,
                history: [action.payload, ...state.history],
            };
        case PlayerActionTypes.DELETE_HISTORY:
            return {
                ...state,
                history: state.history.filter(history => history.id !== action.payload.id)
            };
        case PlayerActionTypes.CLEAR_HISTORY:
            return {
                ...state,
                history: []
            };
        default:
            return state;
    }
};

export default historyReducer;
