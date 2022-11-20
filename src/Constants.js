const GAME_STATE = Object.freeze({
    SUCCESS: "성공",
    FAIL: "실패"
});

const BRIDGE_SIZE = Object.freeze({
    MIN: 3,
    MAX: 20
});

const MOVE = Object.freeze({
    UP: "U",
    DOWN: "D"
});

const HISTORY = Object.freeze({
    ALIVE: "O",
    DIE: "X"
});

const RESTART = Object.freeze({
    YES: "R",
    NO: "Q"
});

module.exports = { GAME_STATE, BRIDGE_SIZE, MOVE, HISTORY, RESTART }