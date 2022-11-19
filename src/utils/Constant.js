const GAME_RULE = Object.freeze({
  MIN_BRIDGE_LENGTH: 3,
  MAX_BRIDGE_LENGTH: 20,
  UPSIDE: '1',
  DOWNSIDE: '0',
  SUCCESS_MESSAGE: '성공',
  FAIL_MESSAGE: '실패',
  SUCCESS: 'O',
  FAIL: 'X',
  BLANK: ' ',
});

const COMMAND = Object.freeze({
  UPSIDE: 'U',
  DOWNSIDE: 'D',
  RETRY: 'R',
  END: 'Q',
});

const INPUT_MESSAGE = Object.freeze({
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  MOVE: `\n이동할 칸을 선택해주세요. (위: ${COMMAND.UPSIDE}, 아래: ${COMMAND.DOWNSIDE})\n`,
  FINAL: `\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${COMMAND.RETRY}, 종료: ${COMMAND.END})\n`,
});

const OUTPUT_MESSAGE = Object.freeze({
  RESULT: '최종 게임 결과',
  START_GAME: '다리 건너기 게임을 시작합니다.\n',
  UPSIDE_BRIDGE: (upsideBridge) => `[ ${upsideBridge.join(' | ')} ]`,
  DOWNSIDE_BRIDGE: (downsideBridge) => `[ ${downsideBridge.join(' | ')} ]`,
  IS_SUCCESS: (result) => `\n게임 성공 여부: ${result}`,
  ATTEMPTS: (attempts) => `총 시도한 횟수: ${attempts}`,
});

const ERROR_MESSAGE_HEADER = '[ERROR]';

const ERROR_MESSAGE_BRIDGE_SIZE = Object.freeze({
  NOT_VALID_TYPE: `${ERROR_MESSAGE_HEADER} 다리 길이는 숫자여야 합니다.`,
  NOT_VALID_RANGE: `${ERROR_MESSAGE_HEADER} 다리 길이는 ${GAME_RULE.MIN_BRIDGE_LENGTH}부터 ${GAME_RULE.MAX_BRIDGE_LENGTH} 사이의 숫자여야 합니다.`,
});

const ERROR_MESSAGE_DIRECTION = Object.freeze({
  NOT_VALID_COMMAND: `${ERROR_MESSAGE_HEADER} ${COMMAND.UPSIDE}(위 칸)와 ${COMMAND.DOWNSIDE}(아래 칸) 중 하나의 문자만 입력할 수 있습니다.`,
});

const ERROR_MESSAGE_FINAL_GAME = Object.freeze({
  NOT_VALID_COMMAND: `${ERROR_MESSAGE_HEADER} ${COMMAND.RETRY}(재시작)과 ${COMMAND.END}(종료) 중 하나의 문자만 입력할 수 있습니다.`,
});

module.exports = {
  GAME_RULE,
  COMMAND,
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  ERROR_MESSAGE_BRIDGE_SIZE,
  ERROR_MESSAGE_DIRECTION,
  ERROR_MESSAGE_FINAL_GAME,
};
