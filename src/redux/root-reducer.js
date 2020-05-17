import {combineReducers} from "redux";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import playerReducer from "./player/player.reducer";
import historyReducer from "./history/history.reducer";
import gameTypeReducer from "./game-type/game-type.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['player', 'history', 'gameType']
};

const rootReducer = combineReducers({
    player: playerReducer,
    history: historyReducer,
    gameType: gameTypeReducer,
});

export default persistReducer(persistConfig, rootReducer);
