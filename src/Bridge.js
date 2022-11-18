class Bridge {
  currentPosition = 0;
  crossInfo = [];

  constructor(bridge) {
    this.bridge = bridge;
  }

  getCorrectDirection() {
    return this.bridge[this.currentPosition];
  }

  getIsLastPosition() {
    return this.currentPosition === this.bridge.length - 1;
  }

  moveCurrentPosition() {
    this.currentPosition += 1;
  }
}

module.exports = Bridge;
