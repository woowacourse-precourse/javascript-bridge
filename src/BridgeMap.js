const { REPRESENTATION } = require("./constants/values");
const { STATE } = require("./constants/message");
class BridgeMap {
  #currentMap = { upperPart: [], lowerPart: [] };

  updateMyPositionForward(direction, symbol) {
    this.#fillPathAccordingInput(direction, symbol);
    return this;
  }

  getMyBridgeMap() {
    return this.#currentMap;
  }

  init() {
    this.#currentMap = { upperPart: [], lowerPart: [] };
  }

  #fillPathAccordingInput(input, symbol) {
    if (input === REPRESENTATION.UPPER.abbreviatedForm) {
      this.#currentMap.upperPart.push(symbol);
      this.#fillBlankUnselectedPath(REPRESENTATION.LOWER.numericalForm);
    }
    if (input === REPRESENTATION.LOWER.abbreviatedForm) {
      this.#currentMap.lowerPart.push(symbol);
      this.#fillBlankUnselectedPath(REPRESENTATION.UPPER.numericalForm);
    }
  }

  #fillBlankUnselectedPath(direction) {
    direction === REPRESENTATION.UPPER.numericalForm
      ? this.#currentMap.upperPart.push(STATE.NOT_VISITED.symbol)
      : this.#currentMap.lowerPart.push(STATE.NOT_VISITED.symbol);
  }
}
module.exports = BridgeMap;
