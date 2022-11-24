const { COMMAND, BRIDGE } = require('./game');

const MESSAGE = Object.freeze({
  INPUT: {
    BRIDGE_LENGTH: '다리의 길이를 입력해주세요.\n',
    SELECT_DIRECTION: `이동할 칸을 선택해주세요. (위: ${COMMAND.MOVE.UP}, 아래: ${COMMAND.MOVE.DOWN})\n`,
    RETRY_OR_QUIT: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${COMMAND.RETRY}, 종료: ${COMMAND.QUIT})\n`,
  },

  OUTPUT: {
    GAME_START: '다리 건너기 게임을 시작합니다.',
    FINAL_GAME_RESULT: '최종 게임 결과',
    GAME_SUCCESS_OR_NOT(isSuccess) {
      const text = isSuccess ? '성공' : '실패';
      return `게임 성공 여부: ${text}`;
    },
    ATTEMPTS_NUMBER(tryCount) {
      return `총 시도한 횟수: ${tryCount}`;
    },
  },

  ERROR: {
    BRIDGE_LENGTH_INPUT_IS_BETWEEN_THREE_AND_TWENTY: `[ERROR] 다리 길이는 ${BRIDGE.LENGTH.MIN}부터 ${BRIDGE.LENGTH.MAX} 사이의 숫자여야 합니다.`,
    MOVING_DIRECTION_INPUT_IS_U_OR_D: `[ERROR] 이동할 칸은 '${COMMAND.MOVE.UP}' 또는 '${COMMAND.MOVE.DOWN}' 여야 합니다.`,
    RETRY_INPUT_IS_R_OR_Q: `[ERROR] '${COMMAND.RETRY}' 또는 '${COMMAND.QUIT}'를 입력해주세요.`,
  },
});

module.exports = MESSAGE;
