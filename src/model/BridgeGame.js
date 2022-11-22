const { generate } = require('../BridgeRandomNumberGenerator');
const { makeBridge } = require('../BridgeMaker');
const { BRIDGE } = require('../constants/Bridge');
const { COMMAND, SUCCESS, FAILURE } = require('../constants/Messages');
const { ZERO, ONE } = require('../constants/Number');

class BridgeGame {
  #bridge;

  #userBridge = [];

  #tryCount = ONE;

  constructor(size) {
    this.#bridge = makeBridge(size, generate);
  }

  move(space) {
    this.#userBridge.push(space);
    return this;
  }

  isCorrectSpace() {
    const bridgePiece = this.#bridge.slice(ZERO, this.#userBridge.length);
    return JSON.stringify(this.#userBridge) === JSON.stringify(bridgePiece);
  }

  makeUpDownBridge() {
    return this.#userBridge.reduce(
      (acc, cur, index) => {
        const space = this.#bridge[index] === cur ? 'O' : 'X';
        return cur === 'U' ? this.makeUpBridge(acc, space) : this.makeDownBridge(acc, space);
      },
      { up: [], down: [] }
    );
  }

  makeUpBridge(bridge, space) {
    bridge.up.push(space);
    bridge.down.push(BRIDGE.blank);
    return bridge;
  }

  makeDownBridge(bridge, space) {
    bridge.up.push(BRIDGE.blank);
    bridge.down.push(space);
    return bridge;
  }

  makeBridgeFormat() {
    const { up, down } = this.makeUpDownBridge();
    const { front, middle, back } = BRIDGE;
    const upBridge = front.concat(up.join(middle), back);
    const downBridge = front.concat(down.join(middle), back);
    return { upBridge, downBridge };
  }

  isEnd() {
    return JSON.stringify(this.#userBridge) === JSON.stringify(this.#bridge);
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
