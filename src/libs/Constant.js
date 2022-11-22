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

const MESSAGE = {
  start: '다리 건너기 게임을 시작합니다.\n',
  end: '최종 게임 결과',
  requestBridgeSize: '다리의 길이를 입력해주세요.\n',
  requestDirection: `\n이동할 칸을 선택해주세요. (위: ${DIRECTION.up}, 아래: ${DIRECTION.down})\n`,
  requestCommandOption: `\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${COMMAND_OPTION.restart}, 종료: ${COMMAND_OPTION.quit})\n`,
};

const ERROR_MESSAGE = {
  number: '\n[ERROR] 숫자만 입력할 수 있습니다.\n',
  range: `\n[ERROR] ${BRIDGE_SIZE.min} 이상 ${BRIDGE_SIZE.max} 이하의 숫자만 입력할 수 있습니다.\n`,
  integer: '\n[ERROR] 정수만 입력할 수 있습니다.\n',
  direction: `\n[ERROR] ${DIRECTION.up} 또는 ${DIRECTION.down}만 입력할 수 있습니다.`,
  commandOption: `\n[ERROR] ${COMMAND_OPTION.restart} 또는 ${COMMAND_OPTION.quit}만 입력할 수 있습니다.`,
};

module.exports = {
  BRIDGE_SIZE,
  DIRECTION,
  COMMAND_OPTION,
  CROSSING_RESULT,
  UP_NUMBER,
  MESSAGE,
  ERROR_MESSAGE,
};
