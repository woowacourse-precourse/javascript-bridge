class BridgeGame {
  constructor() {
    this.size = 0;
    this.bridge = [];
    this.currentPosition = 0;
    this.tryCount = 1;
    this.resultMap = [];
  }
  move(bridge, currentPosition, userChoice) {
    if (bridge[currentPosition] === userChoice) {
      this.currentPosition += 1;
      return true;
    }
    return false;
  }
  retry() {
    this.tryCount += 1;
    this.currentPosition = 0;
    this.resultMap = [];
  }
}

module.exports = BridgeGame;
