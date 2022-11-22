const BridgeUnit = require('./BridgeUnit');

class BridgeGame {
  #round

  #currentResult

  constructor() {
    this.bridgeUnit = new BridgeUnit();
    this.#round = 1;
  }

  storage(result) {
    this.#currentResult = result;
    return ;
  }

  move() {
    this.#round += 1;
  }

  retry() {
    this.move();
    this.bridgeUnit.emptyConsole()
  }

  fail() {
    this.bridgeUnit.resultConsole();
    this.bridgeUnit.bridgeConsole(this.#currentResult)
    this.bridgeUnit.emptyConsole()
    this.bridgeUnit.failConsole();
    this.bridgeUnit.countRoundConsole(this.#round);
    this.bridgeUnit.closeConsole();
  }

  win() {
    this.bridgeUnit.resultConsole();
    this.bridgeUnit.bridgeConsole(this.#currentResult)
    this.bridgeUnit.emptyConsole()
    this.bridgeUnit.winConsole();
    this.bridgeUnit.countRoundConsole(this.#round);
    this.bridgeUnit.closeConsole();
  }
}

module.exports = BridgeGame;
