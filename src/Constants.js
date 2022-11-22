const ERROR_MESSAGE = {
  invalidRangeInput: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  invalidMoveInput: "[ERROR] 다리 이동 입력은 'U'와 'D'만 가능합니다.",
  invalidCommandInput: '[ERROR] (재시도: R, 종료: Q) R과 Q 하나만 입력해주세요',
};

const REQUEST_MESSAGE = {
  bridgeLength: '다리의 길이를 입력해주세요.\n',
  move: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  command: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const GAME_MESSAGE = {
  start: '다리 건너기 게임을 시작합니다.',
  result: '최종 게임 결과',
  success: '성공',
  fail: '실패',
};

const GAME_BUTTON = {
  moveUp: 'U',
  moveDown: 'D',
  restart: 'R',
  end: 'Q',
};

module.exports = { ERROR_MESSAGE, GAME_MESSAGE, REQUEST_MESSAGE, GAME_BUTTON };
