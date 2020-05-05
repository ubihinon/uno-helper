import PlayerActionTypes from "./player.types";

export const addPlayer = player => ({
    type: PlayerActionTypes.ADD_PLAYER,
    payload: player
});

export const deletePlayer = player => ({
    type: PlayerActionTypes.DELETE_PLAYER,
    payload: player
});
