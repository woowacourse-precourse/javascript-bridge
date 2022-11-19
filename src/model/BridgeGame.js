class BridgeGame {
  #isSameChar;
  #upResultArr;
  #downResultArr;

  constructor() {
    this.#isSameChar = [];
    this.#upResultArr = [];
    this.#downResultArr = [];
  }

  move(bridgeWay, userSelect, userInputLength) {
    let countIndex = userInputLength - 1;
    this.checkSameChar(bridgeWay, userSelect, countIndex);
    this.checkUpOrDown(userSelect, countIndex, this.#isSameChar[countIndex]);
    return {
      upResultArr: this.#upResultArr,
      downResultArr: this.#downResultArr,
    };
  }

  checkSameChar(bridgeWay, userSelect, countIndex) {
    if (bridgeWay[countIndex] === userSelect[countIndex]) {
      this.#isSameChar.push('O');
    }

    this.#isSameChar.push('X');
  }

  checkUpOrDown(userSelect, countIndex, selectResult) {
    userSelect[countIndex] === 'U'
      ? (this.#upResultArr.push(selectResult), this.#downResultArr.push(' '))
      : (this.#upResultArr.push(' '), this.#downResultArr.push(selectResult));
  }

  retry() {}
}

module.exports = BridgeGame;
