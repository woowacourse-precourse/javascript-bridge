/**
 * 게임 상태 값, 성공 혹은 실패
 */
const GAME_STATE = Object.freeze({
    SUCCESS: "성공",
    FAIL: "실패"
});

/**
 * 다리 길이의 최소값과 최대값
 */
const BRIDGE_SIZE = Object.freeze({
    MIN: 3,
    MAX: 20
});

/**
 * 이동가능한 다리 혹은 이동할 다리 
 */
const MOVE = Object.freeze({
    UP: "U",
    DOWN: "D"
});

/**
 * 이동 로그 상태 값
 */
const HISTORY = Object.freeze({
    ALIVE: "O",
    DIE: "X"
});

/**
 * 재시작 타입
 */
const RESTART = Object.freeze({
    YES: "R",
    NO: "Q"
});

module.exports = { GAME_STATE, BRIDGE_SIZE, MOVE, HISTORY, RESTART }