const BRIDGE_GAME = Object.freeze({
    start_value: 1,
});

const BRIDGE_GAME_PROCEED = Object.freeze({
    new_line: '',
    fail: 'X',
    retry: "R",
    quit: "Q",
})

const BRIDGE_MAKER = Object.freeze({
    one: 1,
    up: 'U',
    down: 'D',
})

const PLAYERS_MAP = Object.freeze({
    left_block: '[',
    right_block: ']',
    one_value: 1,
    up: 'U',
    down: 'D',
    empty: ' ',
    win: 'O',
    fail: 'X',
    middle_row: ' | ',
})

const START = 0;

module.exports = {
    BRIDGE_GAME,
    BRIDGE_GAME_PROCEED,
    BRIDGE_MAKER,
    PLAYERS_MAP,
    START,
};