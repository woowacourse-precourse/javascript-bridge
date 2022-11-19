const Trimmer = require('../Trimmer');
const { BRIDGE, COMMAND } = require('../constant/Constant');

class BridgeDrawer {
  #gameStatus = {};
  #bridgeDrawing = {};

  #createBridgeGrid() {
    const directions = [COMMAND.MOVING_UP, COMMAND.MOVING_DOWN];

    directions.forEach((currentDirection) => {
      this.#bridgeDrawing[currentDirection] = this.#gameStatus.bridge
        .slice(0, this.#gameStatus.drawSize)
        .map((cell) => (cell === currentDirection ? BRIDGE.SUCCESS_SIGN : BRIDGE.EMPTY_SIGN));
    });
  }

  #markFailSignIfFailed() {
    if (this.#gameStatus.isPlayerSucceed) {
      return;
    }

    const bridgeLastIndex = this.#gameStatus.drawSize - 1;
    const direction = this.#gameStatus.bridge[bridgeLastIndex];
    this.#bridgeDrawing[direction][bridgeLastIndex] = BRIDGE.FAIL_SIGN;
  }
}

module.exports = BridgeDrawer;
