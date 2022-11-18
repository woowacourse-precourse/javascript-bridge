class BridgeErrorCheck {
  validateBridgeSize(size) {
    this.bridgeSize(size);
    this.bridgeType(size);
    return this;
  }

  bridgeSize(size) {
    const SIZE = parseInt(size);
    if (SIZE < 3 || SIZE > 20) {
      throw "\n[ERROR] 3과 20사이의 수만 입력이 가능합니다.\n";
    }
    return this;
  }
  bridgeType(number) {
    if (isNaN(number)) {
      throw "\n[ERROR] 숫자가 아닌 값을 입력하셨습니다.\n";
    }
    return this;
  }

  validateCommand(command) {
    this.commandCheck(command);
    return this;
  }

  commandCheck(command) {
    if (command !== "U" && command !== "D") {
      throw "\n[ERROR] 방향키는 U와 D만 사용 가능합니다.";
    }
    return this;
  }

  validateMenuCommand(command) {
    this.menuCommandCheck(command);
    return this;
  }
  menuCommandCheck(command) {
    if (command !== "R" && command !== "Q") {
      throw "\n[ERROR] 메뉴에서는 R과 Q만 사용 가능합니다.";
    }
    return this;
  }
}
module.exports = BridgeErrorCheck;
