const MESSAGE = Object.freeze({
  READ_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  READ_MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  READ_GAME_COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  GAME_START: '다리 건너기 게임을 시작합니다.\n'
});

const PAD = Object.freeze({
  CORRECT_PAD: 'O',
  WRONG_PAD: 'X',
  NON_EXISTANT_PAD: ' ',
  UP: 'U',
  DOWN: 'D',
});

const COMMAND = Object.freeze({
  RETRY: 'R',
  QUIT: 'Q',
});

const ERROR = Object.freeze({
  BRIDGE_SIZE_MUST_BE_NUMBER: '[ERROR] 다리 길이는 자연수여야 합니다.\n',
  BRIDGE_SIZE_MUST_BE_3_TO_20: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n'

});

module.exports = Object.freeze({
  MESSAGE,
  PAD,
  COMMAND,
  ERROR,
});