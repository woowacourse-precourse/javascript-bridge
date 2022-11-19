const BridgeMaker = require("../BridgeMaker");
const { ORDER, SPACE, COMMAND } = require("../utils/constants");

class BridgeGame {
  #size;

  #bridge;

  #attemptCnt;

  #movingProcess;

  #currentMap;

  constructor() {
    this.#size = 0;
    this.#attemptCnt = 1;
    this.#bridge = [];
    this.#movingProcess = [];
    this.#currentMap = [];
  }

  receiveSize(size) {
    this.#size = size;
    this.makeBridge();
  }

  makeBridge() {
    this.#bridge = BridgeMaker.getSize(this.#size);
  }

  move(moving) {
    this.#movingProcess.push(moving);
    const nowStep = this.checkNowStep();
    const isSafe = this.checkTrap(nowStep, moving);
    const isEnd = this.checkEnd(nowStep);
    this.#currentMap = this.makeMap([[], []], nowStep, isSafe);
    return [this.#currentMap, isSafe, isEnd];
  }

  makeMap(nowMap, nowStep, isSafe) {
    this.#movingProcess.forEach((direction) => {
      const trapZone = Object.keys(SPACE).filter(
        (space) => space !== direction
      )[0];
      nowMap[SPACE[direction]].push("O");
      nowMap[SPACE[trapZone]].push(" ");
    });
    if (!isSafe) return this.checkCrurrent(nowMap, nowStep);
    else return nowMap;
  }

  checkCrurrent(nowMap, nowStep) {
    const currentSpace = this.#movingProcess.pop();
    nowMap[SPACE[currentSpace]][nowStep] = "X";
    return nowMap;
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
