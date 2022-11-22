const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const MoveMapMaker = require('./MapMaker');

class BridgeGame {
  #bridge;
  constructor() {
    this.moveLogs = [];
    this.tryCount = 1;
  }

  buildBridge(length) {
    this.#bridge = BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator.generate);
  }

  move(direction) {
    this.moveLogs.push(direction);
  }

  walkable() {
    return this.moveLogs[this.moveLogs.length - 1] === this.#bridge[this.moveLogs.length - 1];
  }

  currentUserMoveMap() {
    const notConvertMap = this.checkUserMoveLogs(this.moveLogs, this.#bridge);
    const oxCheckedMap = MoveMapMaker.makeUserMoveMap(notConvertMap);
    const convertedMap = MoveMapMaker.mapToString(oxCheckedMap);
    return convertedMap;
  }

  checkUserMoveLogs(movelogs, bridge) {
    const checkedUserMap = movelogs.map((log, index) =>
      log === bridge[index] ? [log, 'O'] : [log, 'X']
    );
    return checkedUserMap;
  }

  isWin() {
    return JSON.stringify(this.moveLogs) === JSON.stringify(this.#bridge);
  }

  retry() {
    this.moveLogs = [];
    this.tryCount += 1;
  }
}
module.exports = BridgeGame;
