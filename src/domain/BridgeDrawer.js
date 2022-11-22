const Trimmer = require('../Trimmer');
const { BRIDGE, COMMAND, MOVE_RESULT } = require('../constant/Constant');

class BridgeDrawer {
  #gameStatus = {};
  #bridgeDrawing = {};

  getBridgeDrawingUsingResult(bridge, drawSize, roundResult) {
    this.#gameStatus.bridge = bridge;
    this.#gameStatus.drawSize = drawSize;
    this.#gameStatus.roundResult = roundResult;
    this.#bridgeDrawing = {};

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
    if (this.#gameStatus.roundResult !== MOVE_RESULT.FAIL) {
      return;
    }

    const bridgeLastIndex = this.#gameStatus.drawSize - 1;
    const direction = this.#gameStatus.bridge[bridgeLastIndex];
    const oppositeDirection = this.#getOppositeDirection(direction);

    this.#bridgeDrawing[direction][bridgeLastIndex] = BRIDGE.EMPTY_SIGN;
    this.#bridgeDrawing[oppositeDirection][bridgeLastIndex] = BRIDGE.FAIL_SIGN;
  }

  #getOppositeDirection(direction) {
    return direction === COMMAND.MOVING_UP ? COMMAND.MOVING_DOWN : COMMAND.MOVING_UP;
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
