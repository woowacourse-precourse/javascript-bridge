const BRIDGE_SIZE = Object.freeze({
  MIN: 3,
  MAX: 20,
});

const MOVING_SPACE = Object.freeze({
  UP: "U",
  DOWN: "D",
});

const OUTPUT_MESSAGE = Object.freeze({
  START: "다리 건너기 게임을 시작합니다.",
});

const INPUT_MESSAGE = Object.freeze({
  BRIDGE_SIZE: "\n다리의 길이를 입력해주세요.\n",
  MOVING_SPACE: `\n이동할 칸을 선택해주세요. (위: ${MOVING_SPACE.UP}, 아래: ${MOVING_SPACE.DOWN})\n`,
});

const ERROR = "[ERROR]";
const ERROR_MESSAGE = Object.freeze({
  BRIDGE_SIZE: `${ERROR} 다리 길이는 ${BRIDGE_SIZE.MIN}부터 ${BRIDGE_SIZE.MAX} 사이의 숫자여야 합니다.`,
  MOVING_SPACE: `${ERROR} ${MOVING_SPACE.UP} 또는 ${MOVING_SPACE.DOWN} 만 입력할 수 있습니다.`,
});

module.exports = {
  BRIDGE_SIZE,
  MOVING_SPACE,
  OUTPUT_MESSAGE,
  INPUT_MESSAGE,
  ERROR_MESSAGE,
};
