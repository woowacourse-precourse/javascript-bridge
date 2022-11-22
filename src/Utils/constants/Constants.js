const BRIDGE = Object.freeze({
    UP: 'U',
    DOWN: 'D',
});

const MOVE = Object.freeze({
    UP: 'U',
    DOWN: 'D',
    CAN: 'O',
    CANT: 'X'
});

const MAP = Object.freeze({ 
    SUCCESS: 'O',
    FAIL: 'X',
    EMPTY: '',
    NOT_RELEVANT: ' ',
});

const STATUS = Object.freeze({
    GAMEOVER: 'gameOver',
    ARRIVAL: 'arrival'
});

const COMMAND = Object.freeze({
    RETRY: 'R',
    QUIT: 'Q'
});

const RANGE = Object.freeze({
    BRIDGE_LEN_MIN: 3,
    BRIDGE_LEN_MAX: 20
});

module.exports = { BRIDGE, MOVE, MAP, STATUS, COMMAND, RANGE };
