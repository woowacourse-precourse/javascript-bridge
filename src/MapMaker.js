const OutputView = require('./OutputView');
const { LETTER_SIGN, DIRECTION } = require('./Constants');

class MapMaker {
  #upperMapArray;
  #lowerMapArray;

  constructor() {
    this.#upperMapArray = [];
    this.#lowerMapArray = [];
  }

  selectRightBridge(direction) {
    if (direction === DIRECTION.UP) this.drawSignUpperMap(LETTER_SIGN.RIGHT);
    if (direction === DIRECTION.DOWN) this.drawSignLowerMap(LETTER_SIGN.RIGHT);
    OutputView.printMap(this.#upperMapArray, this.#lowerMapArray);
  }

  selectWrongBridge(direction) {
    if (direction === DIRECTION.UP) this.drawSignUpperMap(LETTER_SIGN.WRONG);
    if (direction === DIRECTION.DOWN) this.drawSignLowerMap(LETTER_SIGN.WRONG);
    OutputView.printMap(this.#upperMapArray, this.#lowerMapArray);
  }

  drawSignUpperMap(sign) {
    this.#upperMapArray.push(sign);
    this.#lowerMapArray.push(LETTER_SIGN.BLANK);
  }

  drawSignLowerMap(sign) {
    this.#upperMapArray.push(LETTER_SIGN.BLANK);
    this.#lowerMapArray.push(sign);
  }

  makeFinalSuccess(direction, attemptNumber) {
    this.selectRightBridge(direction);
    OutputView.printResult(this.#upperMapArray, this.#lowerMapArray, attemptNumber);
  }

  selectGameOver(attemptNumber) {
    OutputView.printResult(this.#upperMapArray, this.#lowerMapArray, attemptNumber);
  }
}

module.exports = MapMaker;
