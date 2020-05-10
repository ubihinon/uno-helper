import GameTypeActionTypes from "./game-type.types";

export const changeGameType = gameType => ({
    type: GameTypeActionTypes.CHANGE_GAME_TYPE,
    payload: gameType
});
