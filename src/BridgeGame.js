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

  getGameComplete() {
    return this.#gameComplete;
  }

  move(command) {
    this.setTurn(this.#turn + 1);
    const IN_RANGE = this.#bridge.length >= this.#turn - 1;
    const MATCH_COMMAND = this.#bridge[this.#turn] === command;
    if (this.#bridge.length - 1 === this.#turn && MATCH_COMMAND) {
      this.#gameComplete = true;
      this.printResult();
      return false;
    }
    return IN_RANGE && MATCH_COMMAND;
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
    Console.close();
  }
}

module.exports = BridgeGame;
