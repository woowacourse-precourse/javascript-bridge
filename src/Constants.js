const BRIDGE = Object.freeze({
  MIN: 3,
  MAX: 20,
  UP: 'U',
  DOWN: 'D',
});

const GAME = Object.freeze({
  RESTART: 'R',
  QUIT: 'Q',
  CLEAR: '성공',
  FAIL: '실패',
});

const SENTENCE = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.',
  LENGTH: '다리의 길이를 입력해주세요.',
  SELECT_STEP: `이동할 칸을 선택해주세요. (위: ${BRIDGE.UP}, 아래: ${BRIDGE.DOWN})`,
  SELECT_RESTART: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${GAME.RESTART}, 종료: ${GAME.QUIT})`,
});

const RESULT = Object.freeze({
  SENTENCE: '최종 게임 결과',
  OPEN_BRACKET: '[',
  CLOSE_BRACKET: ']',
  DIVIDER: '|',
  IS_CLEAR: '게임 성공 여부: ',
  TRY_COUNT: '총 시도한 횟수: ',
});

const ERROR = Object.freeze({
  PREFIX: '[ERROR]',
  LENGTH: `다리 길이는 ${BRIDGE.MIN}부터 ${BRIDGE.MAX} 사이의 숫자여야 합니다.`,
  IS_NAN: '다리 길이는 숫자로 입력해야 합니다.',
  STEP: `다리 선택은 위: ${BRIDGE.UP}, 아래: ${BRIDGE.DOWN} 둘 중 하나를 입력해야 합니다.`,
  RESTART: `재시도: ${GAME.RESTART}, 종료: ${GAME.QUIT} 둘 중 하나를 입력해야 합니다. `,
});

module.exports = { BRIDGE, GAME, SENTENCE, RESULT, ERROR };
