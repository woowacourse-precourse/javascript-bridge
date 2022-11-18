const MESSAGE = Object.freeze({
  startGame: '다리 건너기 게임을 시작합니다.\n',
  inputBridgeSize: '다리의 길이를 입력해주세요.\n',
  inputDirectionToMove: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
});

const ERROR = Object.freeze({
  mustBeNumber: '[ERROR] 문자와 기호를 제외한 숫자를 입력해주세요.',
  mustBeInRange: '[ERROR] 다리의 길이는 3 이상 20 이하만 가능합니다.',
  mustBeString: '[ERROR] 숫자를 제외한 문자를 입력해주세요.',
  mustBeValidDirection: '[ERROR] U (위칸) 와 D (아래칸) 중에서만 입력해주세요.',
  mustBeUpperCase: '[ERROR] 소문자가 아닌 대문자를 입력해주세요.',
});

module.exports = { MESSAGE, ERROR };
