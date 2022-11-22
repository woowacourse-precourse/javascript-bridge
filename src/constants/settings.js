const BRIDGE_GAME = Object.freeze({
    start_value: 1,
    new_line: '',
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

const VALIDATION = Object.freeze({
    lower_u: 'u',
    lower_d: 'd',
    lower_r: 'r',
    lower_q: 'q',
    upper_r: 'R',
    upper_q: 'Q',
    upper_u: 'U',
    upper_d: 'D',
    one_value: 1,
    empty_value: 0,
    min_value: 2,
    max_value: 21, 
    number_role: /^[0-9]+$/,
})

module.exports = {
    BRIDGE_GAME,
    BRIDGE_GAME_PROCEED,
    BRIDGE_MAKER,
    PLAYERS_MAP,
    START,
    VALIDATION,
};
