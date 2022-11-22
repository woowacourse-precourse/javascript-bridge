const OPPOSITE = { U: 'D', D: 'U' };

class BridgeMap {
  #map;

  constructor() {
    this.initialize();
  }

  initialize() {
    this.#map = { U: [], D: [] };
  }

  mark(direction, mark) {
    const oppositeDirection = OPPOSITE[direction];
    this.#map[direction].push(mark);
    this.#map[oppositeDirection].push(' ');
  }

  getRows() {
    return {
      upperRow: this.#map.U,
      lowerRow: this.#map.D,
    };
  }
}

module.exports = BridgeMap;
