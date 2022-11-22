const ProductionModel = require("./ProductionModel");
const CheckModel = require("./CheckModel");

const { SPACE, COMMAND, ORDER, MARK } = require("../utils/constants");

class BridgeGame {
  constructor() {
    this.bridge = [];
    this.movingProcess = [];
    this.currentMap = [];
  }

  static create(size) {
    this.bridge = ProductionModel.makeBridge(size);
    this.attemptCnt = 1;
  }

  static move(moving) {
    if (this.movingProcess === undefined) this.movingProcess = [];
    this.movingProcess.push(moving);
    this.currentMap = ProductionModel.makeMap([[], []], this.movingProcess);
    const [isSafe, isEnd] = CheckModel.check(this.bridge, this.movingProcess);
    if (!isSafe) this.markTrap();
    return [this.currentMap, isSafe, isEnd];
  }

  static markTrap() {
    const nowStep = CheckModel.checkNowStep();
    const currentSpace = this.movingProcess.pop();
    this.currentMap[SPACE[currentSpace]][nowStep] = MARK.TRAP;
  }

  static retry(command) {
    if (command === COMMAND.RETRY) {
      this.movingProcess = [];
      this.attemptCnt += 1;
      return ORDER.RETRY;
    }
    return ORDER.QUIT;
  }

  static getGameInfo() {
    return [this.currentMap, this.attemptCnt];
  }
}

module.exports = BridgeGame;
