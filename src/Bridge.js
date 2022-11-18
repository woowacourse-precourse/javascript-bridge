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
    return this.currentPosition === this.bridge.length;
  }

  moveCurrentPosition() {
    this.currentPosition += 1;
  }

  getCrossState() {
    return this.bridge.filter((v, i) => i < this.currentPosition);
  }
}

module.exports = Bridge;
