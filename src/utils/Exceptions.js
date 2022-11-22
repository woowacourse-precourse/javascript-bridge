const Exception = {
  isInvalidBridgeSize(input) {
    if(this.isNotNumber(input) || this.bridgeSizeOutofIndex(input)) {
      throw'[ERROR] 다리 길이는 3이상 20이하의 숫자로 입력해야 합니다.'; 
    }
  },

  isNotNumber(input) {
    if(isNaN(input) || input.match(/\s/g)) {
      return true;
    }
  },

  bridgeSizeOutofIndex(input) {
    if(Number(input) < 3 || Number(input) > 20) {
      return true;
    }
  },

  isInvalidMoving(input) {
    if(!input.match(/^[UD]$/)) {
      throw '[ERROR] 이동할 칸에 대한 입력은 U 또는 D만 입력 가능합니다.';
    }
  },

  isInvalidCommand(input) {
    if(!input.match(/^[RQ]$/)) {
      throw '[ERROR] 재시작/종료 여부 입력은 R 또는 Q만 입력 가능합니다.';
    }
  }
}

module.exports = Exception;
