const { GAME_OUTCOME } = require('../Constants');
const MapMaker = require('./MapMaker');

class BridgeGame {
  #answerBridgeArray;
  #bridgeIndex;
  #attemptNumber;
  #mapMaker;

  constructor(answerBridgeArray) {
    this.#mapMaker = new MapMaker();
    this.#answerBridgeArray = answerBridgeArray;
    this.#bridgeIndex = 1;
    this.#attemptNumber = 1;
  }

  decideMoveOrStop(direction) {
    if (direction !== this.#answerBridgeArray[this.#bridgeIndex - 1]) 
      return this.stop(direction);
    if (this.#bridgeIndex === this.#answerBridgeArray.length) {
      this.#mapMaker.makeFinalSuccess(direction, this.#attemptNumber);
      return GAME_OUTCOME.FINAL_SUCCESS;
    }
    return this.move(direction);
  }

  move(direction) {
    this.#bridgeIndex += 1;
    this.#mapMaker.selectRightBridge(direction);
    return GAME_OUTCOME.SUCCESS;
  }

  stop(direction) {
    this.#mapMaker.selectWrongBridge(direction);
    return GAME_OUTCOME.FAIL;
  }

  retry() {
      this.#bridgeIndex = 1;
      this.#attemptNumber += 1;
      this.#mapMaker = new MapMaker();
  }

  quit() {
    this.#mapMaker.selectGameOver(this.#attemptNumber);
  }
}

module.exports = BridgeGame;
