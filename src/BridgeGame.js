const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
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

  moveTracking() {
    const bridge = this.userMoveMap(this.moveLogs, this.#bridge);
    return this.bridgeToString(bridge);
  }

  userMoveMap(moveLogs, bridge) {
    const upside = [];
    const downside = [];
    moveLogs.forEach((move, index) => {
      if (move === bridge[index]) {
        if (move === 'U') {
          upside.push(' O ');
          downside.push('   ');
        }
        if (move === 'D') {
          upside.push('   ');
          downside.push(' O ');
        }
      }
      if (move !== bridge[index]) {
        if (move === 'U') {
          upside.push(' X ');
          downside.push('   ');
        }
        if (move === 'D') {
          upside.push('   ');
          downside.push(' X ');
        }
      }
    });
    return [upside, downside];
  }

  bridgeToString(bridge) {
    const convertedBridge = bridge.map(upOrDown => {
      return '[' + upOrDown.join('|') + ']';
    });
    return convertedBridge;
  }

  isWin() {
    return JSON.stringify(this.moveLogs) === JSON.stringify(this.#bridge);
  }

  isMovable() {
    return this.moveLogs[this.moveLogs.length - 1] === this.#bridge[this.moveLogs.length - 1];
  }

  retry(userChoice) {
    if (userChoice === 'R') {
      this.moveLogs = [];
      this.tryCount += 1;
      return true;
    }
    return false;
  }

  quit(userChoice) {
    return userChoice === 'Q';
  }
}
module.exports = BridgeGame;
