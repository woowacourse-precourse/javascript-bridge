const GAME_MESSAGE = {
  START: '다리 건너기 게임을 시작합니다.\n',
  ASK_SIZE: '다리 길이를 입력해주세요\n',
  ASK_MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  ASK_COMMAND:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)]\n',
  RESULT_SUCCESS: '성공',
  RESULT_FAIL: '실패',
};

const ERROR_MESSAGE = {
  EMPTY_SIZE: '[ERROR] 다리 길이를 입력해주세요.',
  INVALID_SIZE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  EMPTY_MOVE: '[ERROR] 이동할 칸을 입력해주세요.',
  INVALID_MOVE:
    '[ERROR] U(위 칸)와 D(아래 칸) 중 하나의 문자를 입력할 수 있습니다.',
  EMPTY_COMMAND: '[ERROR] 게임을 다시 시도할지 여부를 입력해주세요.',
  INVALID_COMMAND:
    '[ERROR] R(재시도)와 Q(종료) 중 하나의 문자를 입력할 수 있습니다.',
};

const SIGN = {
  ALIVE: 'O',
  DEAD: 'X',
};

const COMMAND = {
  QUIT: 'Q',
  RETRY: 'R',
};

const MOVE = {
  UP: 'U',
  DOWN: 'D',
};

module.exports = { GAME_MESSAGE, ERROR_MESSAGE, SIGN, COMMAND, MOVE };
