const { INPUT_VALUE } = require('./util/Constant');

class BridgeGame {
  #randomBridge

  constructor(randomBridge){
    this.#randomBridge = randomBridge;
  }

  move(userUd) {
    let recentUd = userUd.length - 1;
    if (this.#randomBridge[recentUd] === userUd[recentUd]) {
      return this.lenghtCheck(userUd.length);
    }
    return 0;
  }

  lenghtCheck(userInputLength) {
    if (userInputLength === this.#randomBridge.length) {
      return 2;
    }
    return 1;
  }

  retry(inputRq) {
    if (inputRq === INPUT_VALUE.REPLAY)
      return 1;
    if (inputRq === INPUT_VALUE.QUIT)
      return 0;
  }
}

module.exports = BridgeGame;
