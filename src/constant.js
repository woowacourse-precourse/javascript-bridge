const MESSAGE = {
  GAME_START: "다리 건너기 게임을 시작합니다.",
  INPUT_BRIDGE_LENGTH: "다리의 길이를 입력해주세요.",
};

const BRIDGE = {
  MIN_LENGTH: 3,
  MAX_LENGTH: 20,
};
const ERROR = {
  BRIDGE_LENGTH_RANGE: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  BRIDGE_LENGTH_ISNAN: "[ERROR] 다리 길이는 숫자여야 합니다.",
};

module.exports = {
  MESSAGE,
  BRIDGE,
  ERROR,
};
