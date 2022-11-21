const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const {
  ERROR,
  BRIDGE,
} = require('./constants');

class BridgeGame {
  #bridge;

  #moveInputArray;

  #gameCount;

  constructor() {
    this.#moveInputArray = [];
    this.#gameCount = 1;
  }

  buildBridge(size) {
    if (!this.isValidBridgeSize(size)) {
      throw new Error(ERROR.BRIDGE_SIZE_ERROR);
    }
    this.#bridge = BridgeMaker.makeBridge(size, generate);
  }

  isValidBridgeSize(bridgeSize) {
    if (
      isNaN(bridgeSize) ||
      bridgeSize < BRIDGE.MIN_BRIDGE_SIZE ||
      bridgeSize > BRIDGE.MAX_BRIDGE_SIZE ||
      bridgeSize === '' || bridgeSize.startsWith('0')
    ) return false;
    return true;
  }

  move(moveInput) {
    if (!this.isValidMove(moveInput)) {
      throw new Error(ERROR.MOVE_INPUT_ERROR);
    }
    const nowMoveIdx = this.#moveInputArray.length;
    let isRightDirect = false;
    if (this.#bridge[nowMoveIdx] === moveInput) isRightDirect = true;
    this.#moveInputArray.push({ isRightDirect, moveInput });
  }

  isValidMove(moveInput) {
    if (moveInput === BRIDGE.MOVE_DOWN || moveInput === BRIDGE.MOVE_UP) return true;
    return false;
  }

  getMoveInputArray() {
    return this.#moveInputArray;
  }

  getBridge() {
    return this.#bridge;
  }

  getBridgeLength() {
    return this.#bridge.length;
  }

  retry() {
    this.#moveInputArray = [];
    this.#gameCount += 1;
  }

  getGameCount() {
    return this.#gameCount;
  }
}

module.exports = BridgeGame;
