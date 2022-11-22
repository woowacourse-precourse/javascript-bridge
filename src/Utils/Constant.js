const BRIDGE = {
  SUCCESS: '성공',
  FAIL: '실패',
  CONTINUE: '진행',
  ANSWER: 'O',
  WRONG: 'X',
  EMPTY: ' ',
};

const MESSAGE = {
  INPUT_SIZE: '다리의 길이를 입력하세요. \n',
  INPUT_MOVE: '이동할 칸을 입력하세요. \n',
  INPUT_COMMAND:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  ERROR_INPUT_NUM: '[ERROR] 숫자를 입력해 주시길 바랍니다.',
  ERROR_INPUT_RANGE:
    '[ERROR] 다리 길이는 3이상 20이하 숫자를 입력하시길 바랍니다.',
  ERROR_INPUT_COMMAND: '[ERROR] Q 또는 R을 입력해 주시길 바랍니다.',
  ERROR_INPUT_MOVING: '[ERROR] U 또는 D를 입력해 주시길 바랍니다.',
  START: '다리 건너기 게임을 시작합니다.',
  RESULT_MESSAGE: '최종 게임 결과',
  GAME_SUCCESS: '게임 성공 여부: ',
  GAME_TRY: '총 시도한 횟수: ',
};

const DIRECTION = {
  UP: 'U',
  DOWN: 'D',
};
const COMMAND = {
  QUIT: 'Q',
  RETRY: 'R',
};

module.exports = { BRIDGE, MESSAGE, DIRECTION, COMMAND };
