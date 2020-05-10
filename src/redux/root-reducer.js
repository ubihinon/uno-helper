import {combineReducers} from "redux";
import playerReducer from "./player/player.reducer";
import historyReducer from "./history/history.reducer";
import gameTypeReducer from "./game-type/game-type.reducer";

const rootReducer = combineReducers({
    player: playerReducer,
    history: historyReducer,
    gameType: gameTypeReducer,
});

export default rootReducer;
