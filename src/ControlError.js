const ControlError = {
  readBridgeSizeError(bridgeSize) {
    if (Number(bridgeSize) < 3 || Number(bridgeSize) > 20) {
      throw Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
  },
};

module.exports = ControlError;
