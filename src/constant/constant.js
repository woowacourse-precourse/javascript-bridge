const UTIL = Object.freeze({
  GO: 'O',
  STOP: 'X',
  UP: 'U',
  DOWN: 'D',
  RETRY: 'R',
  QUIT: 'Q',
  SUCCESS: '성공',
  FAIL: '실패',
});

const INPUT = Object.freeze({
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  CHOOSE_BLOCK: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  RESTART: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const OUTPUT = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.\n',
  RESULT_MENT: '최종 게임 결과',
  NEWLINE: '',
});

const NOT_CHOOSE = Object.freeze({
  FIRST_BLOCK: '   ',
  AFTER_FIRST_BLOCK: '|   ',
});

const UPPER_BRIDGE = (upper) => `[${upper}]`;
const LOWER_BRIDGE = (lower) => `[${lower}]\n`;
const IS_SUCCESS_GAME = (result) => `게임 성공 여부: ${result}`;
const TOTAL_TRIES = (tries) => `총 시도한 횟수: ${tries}`;
const RECORD_BRIDGE = (state) => ` ${state} `;

module.exports = {
  UTIL,
  INPUT,
  OUTPUT,
  NOT_CHOOSE,
  UPPER_BRIDGE,
  LOWER_BRIDGE,
  IS_SUCCESS_GAME,
  TOTAL_TRIES,
  RECORD_BRIDGE,
};
