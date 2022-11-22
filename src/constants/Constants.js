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

module.exports = { BRIDGE, MOVE, MAP, STATUS, COMMAND };
