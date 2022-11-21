const START_GAME_MSG = '다리 건너기 게임을 시작합니다.\n';
const BRIDGE_SIZE_REQUEST = '다리의 길이를 입력해주세요.\n';
const MOVE_REQUEST = '이동할 칸을 선택해주세요. (위: U, 아래: D)\n';
const RETRY_REQUEST =
  '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n';
const BRIDGE_SIZE_ERROR =
  '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n';
const MIN_BRIDGE_SIZE = 3;
const MAX_BRIDGE_SIZE = 20;
module.exports = {
  START_GAME_MSG,
  BRIDGE_SIZE_REQUEST,
  MOVE_REQUEST,
  RETRY_REQUEST,
  BRIDGE_SIZE_ERROR,
  MIN_BRIDGE_SIZE,
  MAX_BRIDGE_SIZE,
};
