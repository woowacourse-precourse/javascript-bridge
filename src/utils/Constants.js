const BRIDGE = {
  range: {
    minimum: 3,
    maximum: 20,
  },
  letter: {
    up: 'U',
    down: 'D',
  },
  code: {
    up: 1,
    down: 0,
  },
  game: {
    retry: 'R',
    quit: 'Q',
  },
};

const ERROR_MESSAGE = {
  bridge: {
    range: `[ERROR] 다리 길이는 ${BRIDGE.range.minimum}부터 ${BRIDGE.range.maximum} 사이입니다.`,
    form: `[ERROR] 다리 길이는 숫자여야 합니다.`,
  },
  moving: {
    form: `[ERROR] 사용자의 입력이 잘못되었습니다. (위: ${BRIDGE.letter.up}, 아래: ${BRIDGE.letter.down})`,
  },
  retry: {
    form: `[ERROR] 사용자의 입력이 잘못되었습니다. (재시도: ${BRIDGE.game.retry}, 종료: ${BRIDGE.game.quit})`,
  },
};

module.exports = { BRIDGE, ERROR_MESSAGE };
