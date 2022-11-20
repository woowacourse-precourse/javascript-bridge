const SIZE = {
  MIN: 3,
  MAX: 20,
};

const MESSAGE = {
  START_GAME: "다리 건너기 게임을 시작합니다.",
  INPUT_SIZE: "다리의 길이를 입력해주세요.",
};

const PREFIX = "[ERROR]";

const ERROR = {
  SIZE_TYPE: `${PREFIX} 다리 길이는 숫자를 입력해야 합니다.`,
  SIZE_RANGE: `${PREFIX} 다리 길이는 ${SIZE.MIN}부터  ${SIZE.MAX} 사이의 숫자여야 합니다.`,
};

module.exports = {
  SIZE,
  MESSAGE,
  ERROR,
};
