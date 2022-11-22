const BRIDGE_SIZE = Object.freeze({
  MIN: 3,
  MAX: 20,
});

const MOVING_SPACE = Object.freeze({
  UP: "U",
  DOWN: "D",
});

const RETRY_OR_QUIT = Object.freeze({
  RETRY: "R",
  QUIT: "Q",
});

const MAP = Object.freeze({
  EMPTY: " ",
  SUCCESS: "O",
  FAIL: "X",
  SEPARATOR: " | ",
  START: "[ ",
  END: " ]",
});

const JUDGEMENT = Object.freeze({
  IS_ARRIVE: 0,
  IS_SUCCESS_MOVED: 1,
  IS_FAIL_MOVED: 2,
});

const OUTPUT_MESSAGE = Object.freeze({
  START: "다리 건너기 게임을 시작합니다.\n",
  RESULT: "최종 게임 결과",
  GAME_SUCCESS_OR_NOT(isArrive) {
    return `게임 성공 여부: ${isArrive ? "성공" : "실패"}`;
  },
  TOTAL_NUMBER_OF_TRY(tryCount) {
    return `총 시도한 횟수: ${tryCount}`;
  },
});

const INPUT_MESSAGE = Object.freeze({
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
  MOVING_SPACE: `이동할 칸을 선택해주세요. (위: ${MOVING_SPACE.UP}, 아래: ${MOVING_SPACE.DOWN})\n`,
  RETRY_OR_QUIT: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${RETRY_OR_QUIT.RETRY}, 종료: ${RETRY_OR_QUIT.QUIT})\n`,
});

const ERROR = "[ERROR]";
const ERROR_MESSAGE = Object.freeze({
  BRIDGE_SIZE: `${ERROR} 다리 길이는 ${BRIDGE_SIZE.MIN}부터 ${BRIDGE_SIZE.MAX} 사이의 숫자여야 합니다.`,
  MOVING_SPACE: `${ERROR} ${MOVING_SPACE.UP} 또는 ${MOVING_SPACE.DOWN} 만 입력할 수 있습니다.`,
  RETRY_OR_QUIT: `${ERROR} ${RETRY_OR_QUIT.RETRY} 또는 ${RETRY_OR_QUIT.QUIT} 만 입력할 수 있습니다.`,
});

module.exports = {
  BRIDGE_SIZE,
  MOVING_SPACE,
  RETRY_OR_QUIT,
  MAP,
  JUDGEMENT,
  OUTPUT_MESSAGE,
  INPUT_MESSAGE,
  ERROR_MESSAGE,
};
