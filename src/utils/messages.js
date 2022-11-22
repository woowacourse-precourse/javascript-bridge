const { BRIDGE_SIZE, DIRECTION, COMMAND } = require("./constants");

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

  ERROR_MESSAGE: {
    BRIDGE_NUMBER_TYPE: `[ERROR] 다리 길이는 숫자 형식이어야 합니다.`,
    BRIDGE_SIZE: `[ERROR] 다리 길이는 ${BRIDGE_SIZE.MIN}부터 ${BRIDGE_SIZE.MAX} 사이의 숫자여야 합니다.`,
    MOVING_DIRECTION: `[ERROR] 이동할 칸은 ${DIRECTION.TO_UPPER} 혹은 ${DIRECTION.TO_LOWER} 여야 합니다.`,
    RETRY_COMMAND: `[ERROR] 입력 명령어는 ${COMMAND.RETRY} 혹은 ${COMMAND.QUIT} 여야 합니다.`,
  },
};
