const BRIDGE = Object.freeze({
  min: 3,
  max: 20,
  up: 'U',
  down: 'D',
});

const GAME = Object.freeze({
  restart: 'R',
  quit: 'Q',
  clear: '성공',
  fail: '실패',
});

const SENTENCE = Object.freeze({
  start: '다리 건너기 게임을 시작합니다.',
  bridgeLength: '다리의 길이를 입력해주세요.',
  selectMoving: `이동할 칸을 선택해주세요. (위: ${BRIDGE.up}, 아래: ${BRIDGE.down})`,
  selectRestart: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${GAME.restart}, 종료: ${GAME.quit})`,
});

const RESULT = Object.freeze({
  sentence: '최종 게임 결과',
  openBracket: '[',
  closeBracket: ']',
  divider: '|',
  isClear: '게임 성공 여부: ',
  tryCount: '총 시도한 횟수: ',
});

const ERROR = Object.freeze({
  prefix: '[ERROR]',
  bridgeLength: `다리 길이는 ${BRIDGE.min}부터 ${BRIDGE.max} 사이의 숫자여야 합니다.`,
  isNan: '다리 길이는 숫자로 입력해야 합니다.',
  moving: `다리 선택은 위: ${BRIDGE.up}, 아래: ${BRIDGE.down} 둘 중 하나를 입력해야 합니다.`,
  restart: `재시도: ${GAME.restart}, 종료: ${GAME.quit} 둘 중 하나를 입력해야 합니다. `,
});

module.exports = { BRIDGE, GAME, SENTENCE, RESULT, ERROR };
