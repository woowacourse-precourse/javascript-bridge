const { BRIDGE } = require('../constants');

class MapGenerator {
  #topRow = [];

  #bottomRow = [];

  generate(bridge, stage, moving) {
    if (moving === BRIDGE.MOVING_UPPER) {
      this.generateTopRow(bridge, stage, moving);
      this.#bottomRow.push(' ');
      return;
    }

    this.generateBottomRow(bridge, stage, moving);
    this.#topRow.push(' ');
  }

  generateTopRow(bridge, stage, moving) {
    if (bridge[stage] === moving) {
      this.#topRow.push('O');
      return;
    }

    this.#topRow.push('X');
  }

  generateBottomRow(bridge, stage, moving) {
    if (bridge[stage] === moving) {
      this.#bottomRow.push('O');
      return;
    }

    this.#bottomRow.push('X');
  }

  toString() {
    const map = [this.#topRow, this.#bottomRow];
    return map.map((row) => `[ ${row.join(' | ')} ]`);
  }

  reset() {
    this.#topRow = [];
    this.#bottomRow = [];
  }
}

module.exports = MapGenerator;
