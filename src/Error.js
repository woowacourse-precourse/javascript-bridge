class Error {
  bridgeSizeError(answer) {
    if (!(answer >= 3 && answer <= 20)) {
      throw "[ERROR] 다리의 길이는 3에서 20사이의 정수를 입력해야 합니다.";
    }
  }

  movingError(answer) {
    if (answer !== "U" && answer !== "D") {
      throw "[ERROR] 사다리 이동은 U와 D 키만을 이용해 가능합니다.";
    }
  }

  gameCommandError(answer) {
    if (answer !== "R" && answer !== "Q") {
      throw "[ERROR] 게임을 다시 시도할지 여부는 R키와 Q키만으로 가능합니다.";
    }
  }
}

module.exports = Error;
