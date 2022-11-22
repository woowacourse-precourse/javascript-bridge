const MESSAGE_START = '다리 건너기 게임을 시작합니다.\n';

const MESSAGE_INPUT = Object.freeze({
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
  MOVING: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)',
  GAME_COMMAND:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
});

const MESSAGE_OUTPUT = Object.freeze({
  RESULT: '최종 게임 결과',
  SUCCESS: '성공',
  FAIL: '실패',
  GAME_SUCCESS: '게임 성공 여부: ',
  ATTEMPTS: '총 시도한 횟수: ',
  MAP(path) {
    return `[${path}]`;
  },
});

const ERROR = Object.freeze({
  BRIDGE_SIZE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  DIRECTION: '[ERROR] 위: U 혹은 아래: D 방향으로만 이동하실 수 있습니다.',
  COMMAND: '[ERROR] 재시도: R 혹은 종료: Q 만 입력하실 수 있습니다.',
});

const CONDITION = Object.freeze({
  MIN_SIZE: 3,
  MAX_SIZE: 20,
  UP: 'U',
  DOWN: 'D',
  REGAME: 'R',
});

const MARK = Object.freeze({
  CIRCLE: ' O ',
  CROSS: ' X ',
  BLANK: '   ',
});

module.exports = {
  MESSAGE_INPUT,
  MESSAGE_OUTPUT,
  ERROR,
  MESSAGE_START,
  CONDITION,
  MARK,
};
