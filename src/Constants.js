const WORD = {
  ERROR: "[ERROR]",
  START_SIZE: 3,
  END_SIZE: 20,
  UP_NUMBER: 1,
  DOWN_NUMBER: 0,
  UP: "U",
  DOWN: "D",
  SUCCESS: "O",
  FAILURE: "X",
  BLANK: " ",
  RETRY: "R",
  QUIT: "Q",
};

const MESSAGE = {
  INPUT: {
    BRIDGE_SIZE: "다리의 길이를 입력해주세요.",
    MOVING: `이동할 칸을 선택해주세요. (위: ${WORD.UP}, 아래: ${WORD.DOWN})`,
    GAME_COMMAND: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${WORD.RETRY}, 종료: ${WORD.QUIT})`,
  },
  OUTPUT: {
    START: "다리 건너기 게임을 시작합니다.",
  },
  ERROR: {
    BRIDGE_SIZE: `${WORD.ERROR} 다리 길이는 ${WORD.START_SIZE}부터 ${WORD.END_SIZE} 사이의 숫자여야 합니다.`,
    RANDOM_NUMBER: `${WORD.ERROR} ${WORD.DOWN_NUMBER} 또는 ${WORD.UP_NUMBER}이어야 합니다.`,
    MOVING: `${WORD.ERROR} ${WORD.UP} 또는 ${WORD.DOWN}여야 합니다.`,
    GAME_COMMAND: `${WORD.ERROR} ${WORD.RETRY} 또는 ${WORD.QUIT}여야 합니다.`,
  },
};

module.exports = { WORD, MESSAGE };
