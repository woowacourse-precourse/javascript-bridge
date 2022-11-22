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

  move(upOrDown) {
    this.moveLogs.push(upOrDown);
  }

  walkable() {
    return this.moveLogs[this.moveLogs.length - 1] === this.#bridge[this.moveLogs.length - 1];
  }

  makeUserMoveMap(movelogs, bridge) {
    const checkedUserMap = movelogs.map((log, index) =>
      log === bridge[index] ? [log, 'O'] : [log, 'X']
    );
    return this.checkingUserMoveLogs(checkedUserMap);
  }

  checkingUserMoveLogs(moveMap) {
    const upperBridge = moveMap.map((move) => (move[0] === 'U' ? move[1] : ' '));
    const lowerBridge = moveMap.map((move) => (move[0] === 'D' ? move[1] : ' '));
    return [upperBridge, lowerBridge];
  }

  bridgeToString(bridge) {
    const convertedBridge = bridge.map((upOrDown) => {
      return '[' + upOrDown.join('|') + ']';
    });
    return convertedBridge;
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
