const { INPUT_VALUE } = require('../util/Constant');

class BridgeGame {
  #randomBridge;

  constructor(randomBridge) {
    this.#randomBridge = randomBridge;
  }

  move(userUpDown) {
    let recentUpDown = userUpDown.length - 1;
    if (this.#randomBridge[recentUpDown] === userUpDown[recentUpDown]) {
      return this.lenghtCheck(userUpDown.length);
    }
    return 0;
  }

  lenghtCheck(userInputLength) {
    if (userInputLength === this.#randomBridge.length) {
      return 2;
    }
    return 1;
  }

  retry(inputReplayQuit) {
    if (inputReplayQuit === INPUT_VALUE.REPLAY) return 1;
    if (inputReplayQuit === INPUT_VALUE.QUIT) return 0;
  }
}

module.exports = BridgeGame;
