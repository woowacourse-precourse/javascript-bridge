const ProductionModel = require("./ProductionModel");
const CheckModel = require("./CheckModel");

const { SPACE, COMMAND, ORDER, MARK } = require("../utils/constants");

class BridgeGame {
  #production;

  #checkModel;

  #bridge;

  #attemptCnt;

  #movingProcess;

  #currentMap;

  constructor() {
    this.#production = new ProductionModel();
    this.#checkModel = new CheckModel();
    this.#attemptCnt = 1;
    this.#bridge = [];
    this.#movingProcess = [];
    this.#currentMap = [];
  }

  create(size) {
    console.log(+size);
    this.#bridge = this.#production.makeBridge(+size);
  }

  move(moving) {
    this.#movingProcess.push(moving);
    this.#currentMap = this.#production.makeMap([[], []], this.#movingProcess);
    const [isSafe, isEnd] = this.#checkModel.check(
      this.#bridge,
      this.#movingProcess
    );
    if (!isSafe) this.markTrap();
    return [this.#currentMap, isSafe, isEnd];
  }

  markTrap() {
    const nowStep = this.#checkModel.checkNowStep();
    const currentSpace = this.#movingProcess.pop();
    this.#currentMap[SPACE[currentSpace]][nowStep] = MARK.TRAP;
  }

  retry(command) {
    if (command === COMMAND.RETRY) {
      this.#movingProcess = [];
      this.#attemptCnt += 1;
      return ORDER.RETRY;
    }
    return ORDER.QUIT;
  }

  getGameInfo() {
    return [this.#currentMap, this.#attemptCnt];
  }
}

module.exports = BridgeGame;
