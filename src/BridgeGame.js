const Check = require('./Check');
const BridgePrint = require('./BridgePrint');
const MissionUtils = require('@woowacourse/mission-utils');
const Player = require('./Player');
const Bridge = require('./Bridge');
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
  isFinshed() {
    return this.#bridgeShape.length === this.#index;
  }

  playerInputTrue() {
    if (this.#playerInput === 'U') {
      this.Bridge.pushUpBridge('O');
      this.Bridge.pushDownBridge(' ');
      return;
    }
    this.Bridge.pushUpBridge(' ');
    this.Bridge.pushDownBridge('O');
  }

  playerInputFalse() {
    if (this.#playerInput === 'D') {
      this.Bridge.pushUpBridge(' ');
      this.Bridge.pushDownBridge('X');
      this.Player.setIsGameOver(true);
      return;
    }
    this.Bridge.pushUpBridge('X');
    this.Bridge.pushDownBridge(' ');
    this.Player.setIsGameOver(true);
  }

  retry() {
    this.Bridge = new Bridge();
    this.Player.setIsGameOver(false);
    this.#index = 0;
  }

  addCount() {
    this.Player.addCount();
  }

  getPrintParams() {
    return [this.Player, this.Bridge];
  }

  getPlayer() {
    return this.Player;
  }
  getBridge() {
    return this.Bridge;
  }
  getIsWinnging() {
    return this.Player.getIsWinnging();
  }
}

module.exports = BridgeGame;
