const Check = require('./Check');
const BridgePrint = require('./BridgePrint');
const Player = require('./Player');
const Bridge = require('./Bridge');
const { USER_VALID_INPUT, BRIDGE_PRINT_WORD } = require('./common/messages');
class BridgeGame {
  #bridgeShape;
  #playerInput;
  #index = 0;

  constructor(bridgeShape) {
    this.Player = new Player();
    this.Bridge = new Bridge();
    this.#bridgeShape = bridgeShape;
  }

  move(playerInput) {
    this.#playerInput = playerInput;
    if (this.#playerInput === this.#bridgeShape[this.#index]) {
      this.playerInputTrue();
    } else {
      this.playerInputFalse();
    }
    BridgePrint.printBridge(this.Bridge);
    this.#index++;
    return Check.checkIsGameOver(this.Player, this.Bridge, this.isFinshed());
  }

  retry() {
    this.Bridge = new Bridge();
    this.Player.setIsGameOver(false);
    this.#index = 0;
  }

  isFinshed() {
    return this.#bridgeShape.length === this.#index;
  }

  playerInputTrue() {
    if (this.#playerInput === USER_VALID_INPUT.U) {
      this.Bridge.pushUpBridge(BRIDGE_PRINT_WORD.O);
      this.Bridge.pushDownBridge(BRIDGE_PRINT_WORD.SPACE);
      return;
    }
    this.Bridge.pushUpBridge(BRIDGE_PRINT_WORD.SPACE);
    this.Bridge.pushDownBridge(BRIDGE_PRINT_WORD.O);
  }

  playerInputFalse() {
    if (this.#playerInput === USER_VALID_INPUT.D) {
      this.Bridge.pushUpBridge(BRIDGE_PRINT_WORD.SPACE);
      this.Bridge.pushDownBridge(BRIDGE_PRINT_WORD.X);
      this.Player.setIsGameOver(true);
      return;
    }
    this.Bridge.pushUpBridge(BRIDGE_PRINT_WORD.X);
    this.Bridge.pushDownBridge(BRIDGE_PRINT_WORD.SPACE);
    this.Player.setIsGameOver(true);
  }

  addCount() {
    this.Player.addCount();
  }

  getPrintParams() {
    return [this.Player, this.Bridge];
  }

  getIsGameOver() {
    return this.Player.getIsGameOver();
  }
  getIsWinnging() {
    return this.Player.getIsWinnging();
  }
}

module.exports = BridgeGame;
