const { MIN_BRIDGE_SIZE, MAX_BRIDGE_SIZE, UP, DOWN, RETRY, QUIT } = require('./Command');
const HEADER = '[ERROR]';

const ErrorMessage = {
  BRIDGE_SIZE_NATURAL_NUMBER: `${HEADER} 다리 길이는 자연수여야 합니다.`,
  BRIDGE_SIZE_RANGE: `${HEADER} 다리 길이는 ${MIN_BRIDGE_SIZE}부터 ${MAX_BRIDGE_SIZE} 사이의 숫자여야 합니다.`,
  MOVING_COMMAND: `${HEADER} ${UP}와 ${DOWN} 중 하나의 문자를 입력해야 합니다. (위: ${UP}, 아래: ${DOWN})`,
  GAME_COMMAND: `${HEADER} ${RETRY}과 ${QUIT} 중 하나의 문자를 입력해야 합니다. (재시도: ${RETRY}, 종료: ${QUIT})`,
};

module.exports = ErrorMessage;
