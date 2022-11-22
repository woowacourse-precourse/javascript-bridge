const { DIRECTION, COMMAND } = require("./constants");

module.exports = {
  MESSAGE_INPUT: {
    BRIDGE_SIZE: `다리의 길이를 입력해주세요.`,
    MOVING_DIRECTION: `이동할 칸을 선택해주세요. (위: ${DIRECTION.TO_UPPER}, 아래: ${DIRECTION.TO_LOWER})`,
    RETRY_COMMAND: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${COMMAND.RETRY}, 종료: ${COMMAND.QUIT})`,
  },

  MESSAGE_OUTPUT: {
    GAME_OPENING: `다리 건너기 게임을 시작합니다.`,
    GAME_RESULT: `최종 게임 결과`,
    IS_GAME_CLEAR: `게임 성공 여부:`,
    TRY_COUNT: `총 시도한 횟수:`,
  },

  CLAER: `성공`,
  FAILURE: `실패`,
};
