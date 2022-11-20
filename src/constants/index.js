const SIZE = Object.freeze({
  MIN: 3,
  MAX: 20,
});

const WAY = Object.freeze({
  UP: "U",
  DOWN: "D",
});

const MESSAGE = Object.freeze({
  START_GAME: "다리 건너기 게임을 시작합니다.",
  INPUT_SIZE: "다리의 길이를 입력해주세요.",
  INPUT_MOVING: `이동할 칸을 선택해주세요. (위: ${WAY.UP}, 아래: ${WAY.DOWN})`,
});

const PREFIX = "[ERROR]";

const ERROR = Object.freeze({
  SIZE_TYPE: `${PREFIX} 다리 길이는 숫자를 입력해야 합니다.`,
  SIZE_RANGE: `${PREFIX} 다리 길이는 ${SIZE.MIN}부터  ${SIZE.MAX} 사이의 숫자여야 합니다.`,
  INVALID_MOVING: `${PREFIX} ${WAY.UP} 또는 ${WAY.DOWN} 중 하나를 입력해야 합니다.`,
});

module.exports = {
  SIZE,
  WAY,
  MESSAGE,
  ERROR,
};
