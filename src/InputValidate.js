const InputValidate = {
  checkBridgeSizeType(size) {
    if (!Number(size)) {
      throw new Error("[ERROR] 다리 길이는 숫자 형식이어야 합니다.");
    }
  },
  checkBridgeSizeRange(size) {
    if (Number(size) < 3 || Number(size) > 20) {
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
  },
  checkBridgeSize(size) {
    this.checkBridgeSizeType(size);
    this.checkBridgeSizeRange(size);
  },
};
