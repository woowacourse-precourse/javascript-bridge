const MissionUtils = require('@woowacourse/mission-utils');
const { printResult } = require('./OutputView');

const { Console } = MissionUtils;

let instance = null;

class BridgeGame {
  #turn;

  #bridge;

  #gameTryCount;

  #gameComplete;

  constructor() {
    if (instance) return instance;
    this.#bridge = [];
    this.#gameTryCount = 1;
    this.#gameComplete = false;
    this.init();
  }

  init() {
    this.#turn = -1;
    instance = this;
  }

  setTurn(value) {
    this.#turn = value;
  }

  getBridge() {
    return this.#bridge;
  }

  setBridge(value) {
    this.#bridge = value;
  }

  move(command) {
    this.setTurn(this.#turn + 1);
    return this.#bridge[this.#turn] === command;
  }

  retry(command) {
    if (command === 'R') {
      this.init();
      return true;
    }
    Console.close();
  }

  printResult() {
    printResult(this.#gameComplete, this.#gameTryCount);
  }
}

module.exports = BridgeGame;
