const ERROR_MESSAGE = {
    NOT_A_NUMBER: "[ERROR] 숫자만 입력해야 합니다.",
    NOT_AN_INTEGER: "[ERROR] 정수만 입력해야 합니다.",
    OUT_OF_RANGE_OF_BRIDGE_SIZE: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
    NOT_A_VALID_CHAR: (validChar1, validChar2) => { return `${validChar1}나 ${validChar2} 중 하나의 문자를 입력해주세요.` }
};

const VALID_CHAR = {
    UP: "U",
    DOWN: "D",
    REPLAY: "R",
    QUIT: "Q",
};

const BRIDGE_SHAPE = {
    START: "[",
    END: "]",
    DELIMITER: "|",
    SUCCESS: " O ",
    FAILURE: " X ",
    BLANK: "   ",
};

const SUCCESS_WORD = "성공";

const FAILURE_WORD = "실패";

const FLAG = {
    READ_GAME_COMMAND: "readGameCommand",
    READ_MOVING: "readMoving",
    PRINT_RESULT: "printResult",
}

module.exports = {
    ERROR_MESSAGE,
    VALID_CHAR,
    BRIDGE_SHAPE,
    SUCCESS_WORD,
    FAILURE_WORD,
    FLAG
};