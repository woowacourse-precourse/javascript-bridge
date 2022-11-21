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
    if (inputRq === 'R')
      return 1;
    if (inputRq === 'Q')
      return 0;
  }
}

module.exports = BridgeGame;
