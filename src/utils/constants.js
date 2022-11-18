const MESSAGE = Object.freeze({
  startGame: '다리 건너기 게임을 시작합니다.\n',
  inputBridgeSize: '다리의 길이를 입력해주세요.\n',
});

const ERROR = Object.freeze({
  mustBeNumber: '[ERROR] 문자와 기호를 제외한 숫자를 입력해주세요.',
  mustBeInRange: '[ERROR] 다리의 길이는 3 이상 20 이하만 가능합니다.',
});

module.exports = { MESSAGE, ERROR };
