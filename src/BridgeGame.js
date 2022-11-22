class BridgeGame {
  size;
  retryTime = 1;
  bridge;
  location = 0;

  getSize() {
    return this.size;
  }

  setBridge(string) {
    this.bridge = string;
    this.size = string.length;
  }

  getBridge() {
    return this.bridge;
  }

  getLocation() {
    return this.location;
  }

  changeLocation() {
    this.location += 1;
  }

  getRetry() {
    return this.retryTime;
  }

  move(playerInput, index) {
    this.checkRight(playerInput, index);
    this.checkWrong(playerInput, index);
  }

  checkRight(playerInput, index) {
    if (playerInput === this.bridge[index]) {
      if (index === this.size - 1) {
        throw 3;
      }
      return 1;
    }
  }

  checkWrong(playerInput, index) {
    if (playerInput !== this.bridge[index]) {
      throw 0;
    }
  }

  retry() {
    this.retryTime += 1;
    this.location = 0;
  }
}

module.exports = BridgeGame;
