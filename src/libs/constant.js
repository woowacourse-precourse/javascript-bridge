const MSG = {
  startGame: '다리 건너기 게임을 시작합니다.\n',
  inputBridgeSize: '다리의 길이를 입력해주세요.\n',
  inputMoveDirection: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  inputRestartOrQuitGame: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const ERROR_MSG = {
  invalidBridgeSize: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
};

const DIRECTION = {
  up: 'U',
  down: 'D',
};

module.exports = { MSG, ERROR_MSG, DIRECTION };
