import HistoryActionTypes from "./history.types";

export const addHistory = history => ({
    type: HistoryActionTypes.ADD_HISTORY,
    payload: history
});

export const deleteHistory = history => ({
    type: HistoryActionTypes.DELETE_HISTORY,
    payload: history
});

export const clearHistory = history => ({
    type: HistoryActionTypes.CLEAR_HISTORY,
    payload: history
});