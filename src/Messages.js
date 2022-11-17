const GAME_MESSAGES = Object.freeze({
  gameStart: '다리 건너기 게임을 시작합니다.',
});

const INPUT_MESSAGES = Object.freeze({
  bridgeSize: '\n다리의 길이를 입력해주세요.\n',
});

const ERROR_MESSAGES_BRIDGE = Object.freeze({
  blank: '[ERROR] 공백은 입력되지 않습니다.',
  typeError: '[ERROR] 숫자만 입력해 주세요.',
  outOfSize: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
});

module.exports = { GAME_MESSAGES, INPUT_MESSAGES, ERROR_MESSAGES_BRIDGE };
