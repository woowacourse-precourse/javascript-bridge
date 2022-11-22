const SIZE = Object.freeze({
  MIN: 3,
  MAX: 20,
});

const WAY = Object.freeze({
  UP: "U",
  DOWN: "D",
});

const COMMAND = Object.freeze({
  RETRY: "R",
  QUIT: "Q",
});

const BRIDGE = Object.freeze({
  START: "[ ",
  END: " ]",
  DIVIDE: " | ",
  SAFE: "O",
  UNSAFE: "X",
});

const MESSAGE = Object.freeze({
  START_GAME: "다리 건너기 게임을 시작합니다.",
  INPUT_SIZE: "다리의 길이를 입력해주세요.",
  INPUT_MOVING: `이동할 칸을 선택해주세요. (위: ${WAY.UP}, 아래: ${WAY.DOWN})`,
  INPUT_COMMAND: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${COMMAND.RETRY}, 종료: ${COMMAND.QUIT})`,
  GAME_RESULT: "최종 게임 결과",
  GAME_SUCCESS: "게임 성공 여부: 성공",
  GAME_FAIL: "게임 성공 여부: 실패",
  GAME_TRY: "총 시도한 횟수: ",
});

const PREFIX = "[ERROR]";

const ERROR = Object.freeze({
  SIZE_TYPE: `${PREFIX} 다리 길이는 숫자를 입력해야 합니다.`,
  SIZE_RANGE: `${PREFIX} 다리 길이는 ${SIZE.MIN}부터  ${SIZE.MAX} 사이의 숫자여야 합니다.`,
  INVALID_MOVING: `${PREFIX} ${WAY.UP} 또는 ${WAY.DOWN} 중 하나를 입력해야 합니다.`,
  INVALID_COMMAND: `${PREFIX} ${COMMAND.RETRY} 또는 ${COMMAND.QUIT} 중 하나를 입력해야 합니다.`,
});

module.exports = {
  SIZE,
  WAY,
  COMMAND,
  BRIDGE,
  MESSAGE,
  ERROR,
};
