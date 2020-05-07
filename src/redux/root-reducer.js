import {combineReducers} from "redux";
import playerReducer from "./player/player.reducer";

const rootReducer = combineReducers({
    player: playerReducer,
});

export default rootReducer;
