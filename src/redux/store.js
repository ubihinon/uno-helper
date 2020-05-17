import rootReducer from "./root-reducer";
import {logger} from "redux-logger";
import {applyMiddleware, createStore} from "redux";
import {persistStore} from 'redux-persist';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export {store, persistor};
