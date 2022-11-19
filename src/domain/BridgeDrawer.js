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
}

module.exports = BridgeDrawer;
