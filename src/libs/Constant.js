const MESSAGE = {
  start: '다리 건너기 게임을 시작합니다.\n',
  end: '최종 게임 결과',
  requestBridgeSize: '다리의 길이를 입력해주세요.\n',
  requestDirection: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  requestCommandOption:
    '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const ERROR_MESSAGE = {
  number: '\n[ERROR] 숫자만 입력할 수 있습니다.\n',
  range: '\n[ERROR] 3 이상 20 이하의 숫자만 입력할 수 있습니다.\n',
  integer: '\n[ERROR] 정수만 입력할 수 있습니다.\n',
  direction: '\n[ERROR] U 또는 D만 입력할 수 있습니다.',
  commandOption: '\n[ERROR] R 또는 Q만 입력할 수 있습니다.',
};

const BRIDGE_SIZE = {
  min: 3,
  max: 20,
};

const DIRECTION = {
  up: 'U',
  down: 'D',
};

const COMMAND_OPTION = {
  restart: 'R',
  quit: 'Q',
};

const CROSSING_RESULT = {
  pass: 'O',
  fail: 'X',
  notSeleted: ' ',
};

const UP_NUMBER = 1;

module.exports = {
  MESSAGE,
  ERROR_MESSAGE,
  BRIDGE_SIZE,
  DIRECTION,
  COMMAND_OPTION,
  CROSSING_RESULT,
  UP_NUMBER,
};
