const MissionUtils = require('@woowacourse/mission-utils');
const GameViewController = require('./GameViewController');

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
    GameViewController.viewStateReset();
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
    GameViewController.printMapController(command, this.#bridge[this.#turn]);
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
    GameViewController.resultOutputController();
    GameViewController.printResultController(this.#gameComplete, this.#gameTryCount);
    Console.close();
  }
}

module.exports = BridgeGame;
