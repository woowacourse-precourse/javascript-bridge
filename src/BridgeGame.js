const MissionUtils = require('@woowacourse/mission-utils');
const { printMap, printResult } = require('./OutputView');
const OutputView = require('./OutputView');

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
    OutputView.initResult();
  }

  setTurn(value) {
    this.#turn = value;
  }

  setBridge(value) {
    this.#bridge = value;
  }

  getGameComplete() {
    return this.#gameComplete;
  }

  move(command) {
    this.turnChanger(command);
    const IN_RANGE = this.#bridge.length >= this.#turn - 1;
    const MATCH_COMMAND = this.#bridge[this.#turn] === command;
    if (this.#bridge.length - 1 === this.#turn && MATCH_COMMAND) {
      return this.endGame();
    }
    return IN_RANGE && MATCH_COMMAND;
  }

  turnChanger(command) {
    this.setTurn(this.#turn + 1);
    printMap(command, this.#bridge[this.#turn]);
  }

  endGame() {
    this.#gameComplete = true;
    this.printResult();
    return false;
  }

  retry(command) {
    if (command === 'R') {
      this.#gameTryCount += 1;
      this.init();
      return true;
    }
    return Console.close();
  }

  printResult() {
    OutputView.endResult();
    printResult(this.#gameComplete, this.#gameTryCount);
    Console.close();
  }
}

module.exports = BridgeGame;
