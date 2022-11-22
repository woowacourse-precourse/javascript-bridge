class ErrorMessages {
  static INVALID_SIZE = "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n";
  static INVALID_MOVEMENT = "[ERROR] 이동할 칸은 U 혹은 D만 입력 가능합니다.\n";
  static INVALID_COMMAND = "[ERROR] 재시도 여부는 R 혹은 Q만 입력 가능합니다.\n";
}

module.exports = Object.freeze(ErrorMessages);
