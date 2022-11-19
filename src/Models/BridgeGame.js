const ProductionModel = require("./productionModel");

const { SPACE, COMMAND } = require("../utils/constants");

class BridgeGame {
  #size;

  #bridge;

  #attemptCnt;

  #movingProcess;

  #currentMap;

  constructor() {
    this.production = new ProductionModel();
    this.#size = 0;
    this.#attemptCnt = 1;
    this.#bridge = [];
    this.#movingProcess = [];
    this.#currentMap = [];
  }

  receiveSize(size) {
    this.#size = size;
    this.#bridge = this.production.makeBridge(this.#size);
  }

  move(moving) {
    this.#movingProcess.push(moving);
    const nowStep = this.checkNowStep();
    const isSafe = this.checkTrap(nowStep, moving);
    const isEnd = this.checkEnd(nowStep);
    this.#currentMap = this.production.makeMap([[], []], this.#movingProcess);
    if (!isSafe) this.markTrap();
    return [this.#currentMap, isSafe, isEnd];
  }

  giveMovingProcess() {
    return this.#movingProcess;
  }

  markTrap() {
    const nowStep = this.checkNowStep();
    const currentSpace = this.#movingProcess.pop();
    this.#currentMap[SPACE[currentSpace]][nowStep] = "X";
  }

  checkNowStep() {
    return this.#movingProcess.length - 1;
  }

  checkTrap(nowStep, moving) {
    return moving === this.#bridge[nowStep];
  }

  checkEnd(nowStep) {
    return this.#size - 1 === nowStep;
  }

  retry(answer) {
    if (answer === COMMAND.RETRY) {
      this.#movingProcess = [];
      this.#attemptCnt += 1;
      return true;
    } else if (answer === COMMAND.QUIT) return false;
  }

  checkMap() {
    return this.#currentMap;
  }

  letEnd() {
    return this.#attemptCnt;
  }
}

module.exports = BridgeGame;
