const GAME_START_MESSAGE = '다리 건너기 게임을 시작합니다.\n\n';
const BRIDGE_INPUT_MESSAGE = '다리의 길이를 입력해주세요.\n';
const MOVE_INPUT_MESSAGE = '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n';
const COMMAND_INPUT_MESSAGE = '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n';

const MOVE_RESULT = {
    CORRECT: 'O',
    WRONG: 'X'
};

const GAME_RESULT = {
    PASS: 'P',
    FAIL: 'F'
};

const BRIDGE_SIZE = {
    START: 3,
    END: 20
};

const BRIDGE_MOVING = {
    UP: 'U',
    DOWN: 'D'
};

const GAME_COMMAND = {
    RESTART: 'R',
    QUIT: 'Q'
};
  
module.exports = { BRIDGE_INPUT_MESSAGE, MOVE_INPUT_MESSAGE, COMMAND_INPUT_MESSAGE, GAME_START_MESSAGE, MOVE_RESULT, GAME_RESULT, BRIDGE_SIZE, BRIDGE_MOVING, GAME_COMMAND };