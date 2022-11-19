const Trimmer = require('../Trimmer');
const { BRIDGE, COMMAND } = require('../constant/Constant');

class BridgeDrawer {
  #gameStatus = {};
  #bridgeDrawing = {};

  getBridgeDrawingUsingResult(bridge, drawSize, isPlayerSucceed) {
    this.#gameStatus.bridge = bridge;
    this.#gameStatus.drawSize = drawSize;
    this.#gameStatus.isPlayerSucceed = isPlayerSucceed;

    this.#createBridgeGrid();
    this.#markFailSignIfFailed();
    this.#convertBridgeGridToDrawing();

    return this.#bridgeDrawing;
  }

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

  #convertBridgeGridToDrawing() {
    const directions = [COMMAND.MOVING_UP, COMMAND.MOVING_DOWN];
    directions.forEach((currentDirection) => {
      this.#bridgeDrawing[currentDirection] = `[${this.#bridgeDrawing[currentDirection].join(
        '|'
      )}]`;
    });

    this.#bridgeDrawing = Trimmer.templateTrim(`
      ${this.#bridgeDrawing[COMMAND.MOVING_UP]}
      ${this.#bridgeDrawing[COMMAND.MOVING_DOWN]}`);
  }
}

module.exports = BridgeDrawer;
