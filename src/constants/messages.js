const MESSAGE_GAME = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.\n',
});

const MESSAGE_QUESTION = Object.freeze({
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
});

const ERROR = '[ERROR]';
const MESSAGE_ERROR = Object.freeze({
  INVALID_VALUE: `${ERROR} 잘못된 값의 입력입니다.`,
  INVALID_TYPE: `${ERROR} 잘못된 타입의 입력입니다.`,
  INVALID_FORMAT: `${ERROR} 잘못된 포맷의 입력입니다.`,
  INVALID_RANGE: `${ERROR} 잘못된 밤위의 입력입니다.`,
});

module.exports = {
  MESSAGE_GAME,
  MESSAGE_QUESTION,
  MESSAGE_ERROR,
};
