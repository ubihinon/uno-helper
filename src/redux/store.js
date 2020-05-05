import rootReducer from "./root-reducer";
import {logger} from "redux-logger";
import {applyMiddleware, createStore} from "redux";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
