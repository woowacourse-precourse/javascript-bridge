const ControlError = {
  readBridgeSizeError(bridgeSize) {
    if (Number(bridgeSize) < 3 || Number(bridgeSize) > 20) {
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
};

module.exports = ControlError;
