class Error {
  bridgeSizeError(answer) {
    if (!(answer >= 3 && answer <= 20)) {
      throw "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.";
    }
  }

  movingError(answer) {
    if (answer !== "U" && answer !== "D") {
      throw "[ERROR] 이동할 칸 선택은 U와 D로 가능합니다.";
    }
  }

  gameCommandError(answer) {
    if (answer !== "R" && answer !== "Q") {
      throw "[ERROR] 게임을 다시 시도할지 여부는 R과 Q로 가능합니다.";
    }
  }
}

module.exports = Error;