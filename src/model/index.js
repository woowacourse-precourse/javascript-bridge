const BridgeGame = require('./BridgeGame');

class Model {
  #BridgeGame;

  constructor() {
    this.#BridgeGame = new BridgeGame();
  }

  move(upOrDown, isSucess) {
    return this.#BridgeGame.move(upOrDown, isSucess);
  }

  retry() {
    this.#BridgeGame.retry();
  }

  precompose() {
    this.#BridgeGame.precompose();
  }

  saveSize(input) {
    this.#BridgeGame.saveSize(input);
  }

  isAllPass() {
    return this.#BridgeGame.isAllPass();
  }

  increaseTryOrder() {
    this.#BridgeGame.increaseTryOrder();
  }

  isSamePreBuiltBridgeAsInput(input) {
    return this.#BridgeGame.isSamePreBuiltBridgeAsInput(input);
  }

  saveUpOrDown(input) {
    this.#BridgeGame.saveUpOrDown(input);
  }

  getData() {
    return this.#BridgeGame.getData();
  }

  divideSpace() {
    this.#BridgeGame.divideSpace();
  }
}

module.exports = Model;
