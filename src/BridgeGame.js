const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

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
    const oxCheckedMap = this.makeUserMoveMap(notConvertMap);
    const convertedMap = this.mapToString(oxCheckedMap);
    return convertedMap;
  }

  checkUserMoveLogs(movelogs, bridge) {
    const checkedUserMap = movelogs.map((log, index) =>
      log === bridge[index] ? [log, 'O'] : [log, 'X']
    );
    return checkedUserMap;
  }

  makeUserMoveMap(moveMap) {
    const upperBridge = moveMap.map((move) => (move[0] === 'U' ? move[1] : ' '));
    const lowerBridge = moveMap.map((move) => (move[0] === 'D' ? move[1] : ' '));
    return [upperBridge, lowerBridge];
  }

  mapToString(bridge) {
    const notConvertBridge = bridge.map((bridgeSide) => {
      return '[ ' + bridgeSide.join(' | ') + ' ]';
    });
    return notConvertBridge;
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
