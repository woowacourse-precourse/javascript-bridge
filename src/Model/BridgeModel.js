const BridgeModel = {
  errorMessages: [
    '\n[ERROR] 유효하지 않은 다리 길이입니다.',
    '\n[ERROR] U 또는 D를 입력하세요.',
    '\n[ERROR] R 또는 Q를 입력하세요.',
  ],

  bridge: null,

  failToCross(input, bridgeMoveCount) {
    return input !== this.bridge[bridgeMoveCount - 1];
  },
};

module.exports = BridgeModel;
