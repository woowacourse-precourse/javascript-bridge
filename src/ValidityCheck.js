const ValidityCheck = {
  
  checkBridgeSizeRange(bridgeSize) {
    if (3 > bridgeSize || bridgeSize > 20) {
      throw '[ERROR] 다리 길이는 3에서 20 사이입니다.\n';
    }
  },

  checkBridgeSizeNumber(bridgeSize) {
    const regex = /^[0-9]+$/;
    
    if (!regex.test(bridgeSize)) {
      throw '[ERROR] 다리 길이는 숫자여야 합니다.\n';
    }
  },

  checkMovingInfo(movingInfo) {
    if (!['U', 'D'].includes(movingInfo)) {
      throw '[ERROR] 이동 칸은 U와 D만 입력할 수 있습니다.\n';
    }
  },

  checkRestartOrFail(answer) {
    if (answer !== 'R' && answer !== 'Q') {
      throw '[ERROR] 재시작 여부는 R과 Q만 입력할 수 있습니다.\n';
    }
  }
};

module.exports = ValidityCheck;