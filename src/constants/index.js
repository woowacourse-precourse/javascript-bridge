const ERROR_SUBJECT = '[ERROR]';

const RANGE = Object.freeze({
  start: 3,
  end: 20,
});

const SHORT_CUT = Object.freeze({
  up: 'U',
  down: 'D',
  retry: 'R',
  quit: 'Q',
});

const ERROR_BRIDGE_MESSAGE = Object.freeze({
  message: `다리 길이는 ${RANGE.start}부터 ${RANGE.end} 사이의 숫자여야 합니다.`,
  number: `${ERROR_SUBJECT} 숫자가 아닌 다른 문자가 포함되어 있습니다. ${this.message}`,
  integer: `${ERROR_SUBJECT} 자연수가 아닌 소수를 입력하였습니다. ${this.message}`,
  range: `${ERROR_SUBJECT} 숫자가 범위를 벗어났습니다. ${this.message}`,
});

const ERROR_PLAYING_MESSAGE = Object.freeze({
  message: `이동할 칸의 입력은 ${SHORT_CUT.up} 혹은 ${SHORT_CUT.down}여야 합니다.`,
  lowercase: `${ERROR_SUBJECT} 대문자가 아닌 소문자를 입력하였습니다. ${this.message}`,
  wrong: `${ERROR_SUBJECT} ${SHORT_CUT.up} 또는 ${SHORT_CUT.down}이 아닌 다른 문자를 입력하였습니다. ${this.message}`,
});

const ERROR_RETRY_MESSAGE = Object.freeze({
  message: `게임 종료 여부의 입력은 ${SHORT_CUT.retry} 혹은 ${SHORT_CUT.quit}여야 합니다.`,
  lowercase: `${ERROR_SUBJECT} 대문자가 아닌 소문자를 입력하였습니다. ${this.message}`,
  wrong: `${ERROR_SUBJECT} ${SHORT_CUT.retry} 또는 ${SHORT_CUT.quit}이 아닌 다른 문자를 입력하였습니다. ${this.message}`,
});

const GAME_MESSAGE = Object.freeze({
  start: '다리 건너기 게임을 시작합니다.',
  inputLength: '다리의 길이를 입력해주세요.',
  move: `이동할 칸을 선택해주세요. (위: ${SHORT_CUT.up}, 아래: ${SHORT_CUT.down})`,
  retry: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${SHORT_CUT.retry}, 종료: ${SHORT_CUT.quit})`,
});

const GAME_RESULT = Object.freeze({
  start: '최종 게임 결과',
  result: '게임 성공 여부:',
  success: '성공',
  fail: '실패',
  again: '총 시도한 횟수:',
});

module.exports = {
  ERROR_BRIDGE_MESSAGE,
  ERROR_PLAYING_MESSAGE,
  ERROR_RETRY_MESSAGE,
  SHORT_CUT,
  GAME_MESSAGE,
  GAME_RESULT,
};
