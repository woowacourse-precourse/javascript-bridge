const ControlError = {
  readBridgeSizeError(bridgeSize) {
    const size = Number(bridgeSize);
    if (size < 3 || size > 20 || isNaN(size)) {
      throw Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
  },
  readMoving(moveLocation) {
    switch (moveLocation) {
      case "U":
        break;
      case "D":
        break;
      default:
        throw Error("[ERROR] 이동 칸은 U 또는 D 여야 합니다.");
    }
  },
  readGameCommand(retryOrNot) {
    switch (retryOrNot) {
      case "R":
        break;
      case "Q":
        break;
      default:
        throw Error("[ERROR] 재시도 여부는 R 또는 Q를 입력해야 합니다.");
    }
  },
};

module.exports = ControlError;
