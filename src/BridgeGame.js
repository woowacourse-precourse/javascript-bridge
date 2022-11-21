const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const {
  BRIDGE_SIZE_ERROR,
  MOVE_INPUT_ERROR,
  MIN_BRIDGE_SIZE,
  MAX_BRIDGE_SIZE,
  MOVE_UP,
  MOVE_DOWN,
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
      throw new Error(BRIDGE_SIZE_ERROR);
    }
    this.#bridge = BridgeMaker.makeBridge(size, generate);
  }

  isValidBridgeSize(bridgeSize) {
    if (
      isNaN(bridgeSize) ||
      bridgeSize < MIN_BRIDGE_SIZE ||
      bridgeSize > MAX_BRIDGE_SIZE ||
      bridgeSize === ''
    ) {
      return false;
    }
    return true;
  }

  move(moveInput) {
    if (!this.isValidMove(moveInput)) {
      throw new Error(MOVE_INPUT_ERROR);
    }
    const nowMoveIdx = this.#moveInputArray.length;
    let isRightDirect = false;
    if (this.#bridge[nowMoveIdx] === moveInput) {
      isRightDirect = true;
    }
    this.#moveInputArray.push({ isRightDirect, moveInput });
  }

  isValidMove(moveInput) {
    if (moveInput === MOVE_DOWN || moveInput === MOVE_UP) return true;
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
