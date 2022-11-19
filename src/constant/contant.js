const INPUT_TEXT = Object.freeze({
  GAME_START: '다리 건너기 게임을 시작합니다.',
  BRIDGE_SIZE: '\n다리의 길이를 입력해주세요.',
  BRIDGE_MOVING: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)',
  BRIDGE_COMMAND:
    '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
});

const OUTPUT_TEXT = Object.freeze({
  GAME_RESULT: '\n최종 게임 결과',
  DIVISION: ' | ',
  SUCESS_RESULT(result) {
    return `\n게임 성공 여부: ${result}`;
  },
  TOTAL_COUNT(count) {
    return `총 시도한 횟수: ${count}`;
  },
  BRIDGE_RESULT(result) {
    return `[ ${result} ]`;
  },
});

const ERROR_MESSAGE = Object.freeze({
  BRIDGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  MOVING: '[ERROR] 다리 이동은 U혹은 D인 문자여야 합니다.',
  COMMAND: '[ERROR] 재시작,종료 R혹은 Q인 문자여야 합니다.',
});

const USER_TEXT = Object.freeze({
  UP: 'U',
  DOWN: 'D',
  RESTART: 'R',
  QUIT: 'Q',
});

const GAME_TEXT = Object.freeze({
  O: 'O',
  X: 'X',
  SUCCESS: '성공',
  FAIL: '실패',
  ZERO: '0',
  ONE: '1',
  SPACE: ' ',
  EMPTY: '',
});

const NUMBER = Object.freeze({
  ZERO: 0,
  ONE: 1,
  THREE: 3,
  TWENTY: 20,
});

const BOOLEAN = Object.freeze({
  TRUE: true,
  FALSE: false,
});

module.exports = {
  INPUT_TEXT,
  OUTPUT_TEXT,
  ERROR_MESSAGE,
  USER_TEXT,
  GAME_TEXT,
  NUMBER,
  BOOLEAN,
};
