const {
  BRIDGE_INFO,
  GAME_STATUS,
  ERROR_TAG,
  NEW_LINE,
} = require('./BridgeGameSetting');

const MESSAGE = {
  PROCESS: {
    GAME_START: `다리 건너기 게임을 시작합니다.${NEW_LINE}`,
    ENTER_BRIDGE_LENGTH: '다리의 길이를 입력해주세요.',
    SELECT_UP_DOWN: `이동할 칸을 선택해주세요. (위: ${BRIDGE_INFO.SELECT_UP}, 아래: ${BRIDGE_INFO.SELECT_DOWN})`,
    SELECT_RESTART_OR_QUIT: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${GAME_STATUS.GAME_RESTART}, 종료: ${GAME_STATUS.GAME_QUIT})`,
    GAME_RESULT: '최종 게임 결과',
    SUCCESS_OR_FAILURE: `게임 성공 여부: `,
    NUMBER_OF_ATTEMPTS: `총 시도한 횟수: `,
    GAME_FINISH: '게임종료',
  },
  ERROR: {
    INCORRECT_BRIDGE_LENGTH: `${ERROR_TAG} ${BRIDGE_INFO.MIN_LENGTH}이상 ${BRIDGE_INFO.MAX_LENGTH}이하의 숫자만 입력 가능합니다.`,
    INCORRECT_BRIDGE_SELECT: `${ERROR_TAG} 알파벳 ${BRIDGE_INFO.SELECT_UP}또는 ${BRIDGE_INFO.SELECT_DOWN}만 입력 가능합니다.`,
    INCORRECT_GAME_STATUS: `${ERROR_TAG} 알파벳 ${GAME_STATUS.GAME_RESTART}또는 ${GAME_STATUS.GAME_QUIT}만 입력 가능합니다.`,
  },
};

module.exports = MESSAGE;
