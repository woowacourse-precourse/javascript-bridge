const { BRIDGE } = require('../constants/Bridge');
const { COMMAND, SUCCESS, FAILURE } = require('../constants/Messages');
const { ZERO, ONE } = require('../constants/Number');

class BridgeGame {
  #bridge;

  #userBridge = [];

  #tryCount = ONE;

  constructor(bridge) {
    this.#bridge = bridge;
  }

  move(space) {
    this.#userBridge.push(space);
    return this;
  }

  isCorrectSpace() {
    const bridgePiece = this.#bridge.slice(ZERO, this.#userBridge.length);
    return JSON.stringify(this.#userBridge) === JSON.stringify(bridgePiece);
  }

  isEnd() {
    return JSON.stringify(this.#userBridge) === JSON.stringify(this.#bridge);
  }

  makeBridgeFormat() {
    const { front, middle, back } = BRIDGE;
    const { up, down } = this.#makeUpDownBridge();
    const upBridge = front.concat(up.join(middle), back);
    const downBridge = front.concat(down.join(middle), back);
    return { upBridge, downBridge };
  }

  #makeUpDownBridge() {
    return this.#userBridge.reduce(
      (bridgeAccumulator, currentCommand, index) => {
        const space = this.#bridge[index] === currentCommand ? BRIDGE.correct : BRIDGE.wrong;
        return BridgeGame.#bridgeMaker(bridgeAccumulator, currentCommand, space);
      },
      { up: [], down: [] }
    );
  }

  static #bridgeMaker(bridge, command, space) {
    if (command === COMMAND.up) {
      return BridgeGame.#makeUpBridge(bridge, space);
    }
    return BridgeGame.#makeDownBridge(bridge, space);
  }

  static #makeUpBridge(bridge, space) {
    bridge.up.push(space);
    bridge.down.push(BRIDGE.blank);
    return bridge;
  }

  static #makeDownBridge(bridge, space) {
    bridge.up.push(BRIDGE.blank);
    bridge.down.push(space);
    return bridge;
  }

  retry(input) {
    if (input === COMMAND.retry) {
      this.#tryCount += ONE;
      this.#userBridge = [];
      return true;
    }
    return false;
  }

  getResult() {
    const bridge = this.makeBridgeFormat();
    const result = this.isEnd() ? SUCCESS : FAILURE;
    const count = this.#tryCount;
    return { bridge, result, count };
  }
}

module.exports = BridgeGame;
