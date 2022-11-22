const INPUT_MESSAGE = {
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  MOVING_COMMAND: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  GAME_COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const OUTPUT_MESSAGE = {
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
};

const GAME_COMMANDS = {
  RETRY: 'R',
  QUIT: 'Q',
};

const GAME_RESULT = {
  SUCCESS: '성공',
  FAIL: '실패',
};

const BRIDGE_SIZE = {
  MIN: 3,
  MAX: 20,
};

const MOVING = {
  RANDOM_UPPER: 1,
  RANDOM_LOWER: 0,
  UPPER: 'U',
  LOWER: 'D',
  RIGHT_ANSWER: 'O',
  WRONG_ANSWER: 'X',
  SPACE: ' ',
};

module.exports = { INPUT_MESSAGE, OUTPUT_MESSAGE, GAME_COMMANDS, GAME_RESULT, BRIDGE_SIZE, MOVING };
