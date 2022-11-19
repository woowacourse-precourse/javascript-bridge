const INPUT_MESSAGE = Object.freeze({
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  MOVE: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  FINAL: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  START_GAME: '다리 건너기 게임을 시작합니다.\n',
  UPSIDE_BRIDGE: (upsideBridge) => `[ ${upsideBridge.join(' | ')} ]`,
  DOWNSIDE_BRIDGE: (downsideBridge) => `[ ${downsideBridge.join(' | ')} ]`,
  RESULT: (result) => `\n게임 성공 여부: ${result}`,
  ATTEMPTS: (attempts) => `총 시도한 횟수: ${attempts}`,
});

const ERROR_MESSAGE_HEADER = '[ERROR]';

const ERROR_MESSAGE_BRIDGE_SIZE = Object.freeze({
  NOT_VALID_TYPE: `${ERROR_MESSAGE_HEADER} 다리 길이는 숫자여야 합니다.`,
  NOT_VALID_RANGE: `${ERROR_MESSAGE_HEADER} 다리 길이는 3부터 20 사이의 숫자여야 합니다.`,
});

const ERROR_MESSAGE_DIRECTION = Object.freeze({
  NOT_VALID_COMMAND: `${ERROR_MESSAGE_HEADER} U(위 칸)와 D(아래 칸) 중 하나의 문자만 입력할 수 있습니다.`,
});

const ERROR_MESSAGE_FINAL_GAME = Object.freeze({
  NOT_VALID_COMMAND: `${ERROR_MESSAGE_HEADER} R(재시작)과 Q(종료) 중 하나의 문자만 입력할 수 있습니다.`,
});

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  ERROR_MESSAGE_BRIDGE_SIZE,
  ERROR_MESSAGE_DIRECTION,
  ERROR_MESSAGE_FINAL_GAME,
};
