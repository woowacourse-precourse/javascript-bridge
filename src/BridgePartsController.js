class BridgePartsController {
  #upperBridge;

  #downerBridge;

  constructor() {
    this.#upperBridge = ['['];
    this.#downerBridge = ['['];
  }

  createMap(game) {
    const records = game.getRecords();
    records.forEach((direction, idx) => {
      const bridge = game.getBridge();
      this.checkDirection(game, direction, bridge[idx]);
      this.createPier();
    });
  }

  checkDirection(game, direction, nextDirection) {
    if (direction === 'U') {
      this.markUpperBridge(direction, nextDirection);
    } else if (direction === 'D') {
      this.markDownerBridge(direction, nextDirection);
    }
  }

  markUpperBridge(direction, nextDirection) {
    if (direction === nextDirection)
      this.#upperBridge = [...this.#upperBridge, 'O'];
    else this.#upperBridge = [...this.#upperBridge, 'X'];
    this.#downerBridge = [...this.#downerBridge, ' '];
  }

  markDownerBridge(direction, nextDirection) {
    if (direction === nextDirection)
      this.#downerBridge = [...this.#downerBridge, 'O'];
    else this.#downerBridge = [...this.#downerBridge, 'X'];
    this.#upperBridge = [...this.#upperBridge, ' '];
  }

  createPier() {
    this.#upperBridge = [...this.#upperBridge, '|'];
    this.#downerBridge = [...this.#downerBridge, '|'];
  }

  closeBridge() {
    this.#upperBridge = [...this.#upperBridge.slice(0, -1), ']'];
    this.#downerBridge = [...this.#downerBridge.slice(0, -1), ']'];
  }

  getUpperBridge() {
    return this.#upperBridge.join(' ');
  }

  getDownerBridge() {
    return this.#downerBridge.join(' ');
  }
}

module.exports = BridgePartsController;
