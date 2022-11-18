const WORD = {
  ERROR: "[ERROR]",
  START_SIZE: 3,
  END_SIZE: 20,
};

const MESSAGE = {
  INPUT: {
    BRIDGE_SIZE: "다리의 길이를 입력해주세요.",
  },
  OUTPUT: {
    START: "다리 건너기 게임을 시작합니다.",
  },
  ERROR: {
    BRIDGE_SIZE: `${WORD.ERROR} 다리 길이는 ${WORD.START_SIZE}부터 ${WORD.END_SIZE} 사이의 숫자여야 합니다.`,
  },
};

module.exports = { WORD, MESSAGE };
