const ERROR_SUBJECT = '[ERROR]';

const SHORT_CUT = Object.freeze({
  down: 'D',
  quit: 'Q',
  retry: 'R',
  up: 'U',
});

const BRIDGE_RANGE = Object.freeze({
  end: 20,
  start: 3,
});

const ERROR_RULE_MESSAGE = Object.freeze({
  bridge: `다리 길이는 ${BRIDGE_RANGE.start}부터 ${BRIDGE_RANGE.end} 사이의 숫자여야 합니다.`,
  playing: `이동할 칸의 입력은 ${SHORT_CUT.up} 혹은 ${SHORT_CUT.down}여야 합니다.`,
  retry: `게임 종료 여부의 입력은 ${SHORT_CUT.retry} 혹은 ${SHORT_CUT.quit}여야 합니다.`,
});

const ERROR_BRIDGE_MESSAGE = Object.freeze({
  integer: `${ERROR_SUBJECT} 자연수가 아닌 소수를 입력하였습니다. ${ERROR_RULE_MESSAGE.bridge}`,
  number: `${ERROR_SUBJECT} 숫자가 아닌 다른 문자가 포함되어 있습니다. ${ERROR_RULE_MESSAGE.bridge}`,
  range: `${ERROR_SUBJECT} 숫자가 범위를 벗어났습니다. ${ERROR_RULE_MESSAGE.bridge}`,
});

const ERROR_PLAYING_MESSAGE = Object.freeze({
  lowercase: `${ERROR_SUBJECT} 대문자가 아닌 소문자를 입력하였습니다. ${ERROR_RULE_MESSAGE.playing}`,
  wrong: `${ERROR_SUBJECT} ${SHORT_CUT.up} 또는 ${SHORT_CUT.down}가 아닌 다른 문자를 입력하였습니다. ${ERROR_RULE_MESSAGE.playing}`,
});

const ERROR_RETRY_MESSAGE = Object.freeze({
  lowercase: `${ERROR_SUBJECT} 대문자가 아닌 소문자를 입력하였습니다. ${ERROR_RULE_MESSAGE.retry}`,
  wrong: `${ERROR_SUBJECT} ${SHORT_CUT.retry} 또는 ${SHORT_CUT.quit}가 아닌 다른 문자를 입력하였습니다. ${ERROR_RULE_MESSAGE.retry}`,
});

const GAME_BOOLEAN = Object({
  fail: false,
  success: true,
});

const GAME_MESSAGE = Object.freeze({
  inputLength: '다리의 길이를 입력해주세요.',
  move: `이동할 칸을 선택해주세요. (위: ${SHORT_CUT.up}, 아래: ${SHORT_CUT.down})`,
  retry: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${SHORT_CUT.retry}, 종료: ${SHORT_CUT.quit})`,
  start: '다리 건너기 게임을 시작합니다.',
});

const GAME_RESULT = Object.freeze({
  attempts: '총 시도한 횟수:',
  fail: '실패',
  result: '게임 성공 여부:',
  start: '최종 게임 결과',
  success: '성공',
});

const GAME_STRING = Object({
  empty: '',
  fail: 'X',
  normal: ' ',
  success: 'O',
});

const NUMBER = Object.freeze({
  one: 1,
  zero: 0,
});

module.exports = {
  BRIDGE_RANGE,
  ERROR_BRIDGE_MESSAGE,
  ERROR_PLAYING_MESSAGE,
  ERROR_RETRY_MESSAGE,
  ERROR_SUBJECT,
  GAME_BOOLEAN,
  GAME_MESSAGE,
  GAME_RESULT,
  GAME_STRING,
  SHORT_CUT,
  NUMBER,
};
