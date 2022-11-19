class BridgeGame {
  #resultArr;

  constructor() {
    this.#resultArr = [];
  }

  move(bridgeWay, userSelect, userInputLength) {
    let countIndex = userInputLength - 1;
    bridgeWay[countIndex] === userSelect[countIndex]
      ? this.#resultArr.push('O')
      : this.#resultArr.push('X');
    return this.#resultArr;
  }

  retry() {}
}

module.exports = BridgeGame;
