class BridgeGame {
  #isSameChar;
  #upResultArr;
  #downResultArr;
  #isGameOver;

  constructor() {
    this.#isSameChar = [];
    this.#upResultArr = [];
    this.#downResultArr = [];
    this.#isGameOver = false;
  }

  move(bridgeWay, userSelect, userInputLength) {
    let countIndex = userInputLength - 1;
    this.checkSameChar(bridgeWay, userSelect, countIndex);
    this.checkUpOrDown(userSelect, countIndex, this.#isSameChar[countIndex]);
    return {
      upResultArr: this.#upResultArr,
      downResultArr: this.#downResultArr,
      isGameOver: this.#isGameOver,
    };
  }

  checkSameChar(bridgeWay, userSelect, countIndex) {
    bridgeWay[countIndex] === userSelect[countIndex]
      ? this.#isSameChar.push('O')
      : (this.#isSameChar.push('X'), (this.#isGameOver = true));
  }

  checkUpOrDown(userSelect, countIndex, selectResult) {
    userSelect[countIndex] === 'U'
      ? (this.#upResultArr.push(selectResult), this.#downResultArr.push(' '))
      : (this.#upResultArr.push(' '), this.#downResultArr.push(selectResult));
  }

  retry() {
    this.#isSameChar = [];
    this.#upResultArr = [];
    this.#downResultArr = [];
    this.#isGameOver = false;
  }
}

module.exports = BridgeGame;
