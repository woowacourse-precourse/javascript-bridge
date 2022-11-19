class Messages {
  static START_GAME = '다리 건너기 게임을 시작합니다.\n';
  static INPUT_BRIDGE_SIZE = '다리의 길이를 입력해주세요.\n';
  static INPUT_MOVING = '이동할 칸을 선택해주세요. (위: U, 아래: D)\n';
  static INPUT_RESTART_OR_END = '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n';
  static END_GAME = '최종 게임 결과';

  static BRIDGE_SIZE_ERROR = '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.';
  static MOVING_ERROR = '[ERROR] 이동할 칸("U" 또는 "D")을 입력해주세요.';
  static GAME_COMMAND_ERROR = '[ERROR] 재시작 또는 종료("R" 또는 "Q")를 입력해주세요.';
}

module.exports = Object.freeze(Messages);
