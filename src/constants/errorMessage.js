class errorMessage {
  static OUT_RANGE_NUMBER = '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.';
  static NOT_NUMBER = '[ERROR] 다리 길이는 숫자만 입력해야 합니다.';
  static MOVE_DIRECTION = '[ERROR] 이동할 칸은 U 또는 D 중 하나의 문자를 입력해야 합니다.';
  static RESTART = '[ERROR] 게임 재시작/종료 여부는 R 또는 Q 중 하나의 문자를 입력해야 합니다.';
}

module.exports = Object.freeze(errorMessage);
