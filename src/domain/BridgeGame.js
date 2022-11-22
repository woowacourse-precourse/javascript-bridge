const Validator = require('../Validator');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const ResultJudger = require('./ResultJudger');
const BridgeDrawer = require('./BridgeDrawer');

class BridgeGame {
  #gameStatus = {};
  #bridgeDrawer;
  #resultJudger;

  constructor(bridgeSize) {
    Validator.errorIfBridgeSizeInvalid(bridgeSize);
    this.#gameStatus.bridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
    this.#gameStatus.bridgeCrossCount = 0;
    this.#gameStatus.attempt = 1;
    this.#bridgeDrawer = new BridgeDrawer();
    this.#resultJudger = new ResultJudger();
  }

  move(movingDirection) {
    this.#gameStatus.movingDirection = movingDirection;
    this.#gameStatus.bridgeCrossCount += 1;
    this.#gameStatus.roundResult = this.#resultJudger.getRoundResult(
      this.#gameStatus.bridge,
      this.#gameStatus.bridgeCrossCount,
      this.#gameStatus.movingDirection
    );
  }

  retry() {
    this.#gameStatus.attempt += 1;
    this.#gameStatus.bridgeCrossCount = 0;
  }

  getGameResult() {
    return {
      bridge: this.#bridgeDrawer.getBridgeDrawingUsingResult(
        this.#gameStatus.bridge,
        this.#gameStatus.bridgeCrossCount,
        this.#gameStatus.roundResult
      ),
      roundResult: this.#gameStatus.roundResult,
      attempt: this.#gameStatus.attempt,
    };
  }
}

module.exports = BridgeGame;
