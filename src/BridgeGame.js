const { Console } = require('@woowacourse/mission-utils');

const BridgeUnit = require('./BridgeUnit');

class BridgeGame {
  #round = 1;

  #currentResult

  constructor() {
    this.bridgeUnit = new BridgeUnit();
  }

  storage(result) {
    this.#currentResult = result;
    return ;
  }

  move() {
    this.#round += 1;
  }

  countRound() {
    this.bridgeUnit.countRoundConsole(this.#round);
  }

  retry() {
    this.move();
    Console.print('');
  }

  fail() {
    this.bridgeUnit.resultConsole();
    this.printResultBridge();
    Console.print('');
    this.bridgeUnit.failConsole();
    this.countRound();
    Console.close();
  }

  win() {
    this.bridgeUnit.resultConsole();
    this.printResultBridge();
    Console.print('');
    this.bridgeUnit.winConsole();
    this.countRound();
    Console.close();
  }

  printResultBridge() {
    Console.print(this.#currentResult);
  }
}

module.exports = BridgeGame;
