const GAME_START = '다리 건너기 게임을 시작합니다.\n';
const READ_BRIDGE_SIZE = '다리의 길이를 입력해주세요.\n';
const READ_MOVING = '이동할 칸을 선택해주세요. (위: U, 아래: D)';
const READ_GAME_COMMAND = '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)';

const BRIDGE = Object.freeze({
  min_size: 3,
  max_size: 20,
});

const ERROR = Object.freeze({
  bridge_size_error: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n',
});

module.exports = {
  GAME_START,
  READ_BRIDGE_SIZE,
  READ_MOVING,
  READ_GAME_COMMAND,
  BRIDGE,
  ERROR,
};
