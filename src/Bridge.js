class Bridge {
  currentPosition = 0;

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

  getCrossState(state) {
    console.log(this.currentPosition);
    if (state === "failed")
      return [
        ...this.bridge.filter((v, i) => i < this.currentPosition),
        `X${this.bridge[this.currentPosition]}`,
      ];
    return this.bridge.filter((v, i) => i < this.currentPosition);
  }

  resetCurrentPosition() {
    this.currentPosition = 0;
  }
}

module.exports = Bridge;
