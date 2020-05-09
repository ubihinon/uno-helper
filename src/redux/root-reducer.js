import {combineReducers} from "redux";
import playerReducer from "./player/player.reducer";
import historyReducer from "./history/history.reducer";

const rootReducer = combineReducers({
    player: playerReducer,
    history: historyReducer,
});

export default rootReducer;
