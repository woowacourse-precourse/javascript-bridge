const { MOVING } = require('../utils/constants');

const MAP = Object.create({
  PASS: 'O',
  FAIL: 'X',
  BLANK: ' ',
});

const MapGenerator = {
  topRow: [],

  bottomRow: [],

  generate(bridge, stage, moving) {
    if (moving === MOVING.UPPER) {
      this.generateTopRow(bridge, stage, moving);
      this.bottomRow.push(MAP.BLANK);
      return;
    }

    this.generateBottomRow(bridge, stage, moving);
    this.topRow.push(MAP.BLANK);
  },

  generateTopRow(bridge, stage, moving) {
    if (bridge[stage] === moving) {
      this.topRow.push(MAP.PASS);
      return;
    }

    this.topRow.push(MAP.FAIL);
  },

  generateBottomRow(bridge, stage, moving) {
    if (bridge[stage] === moving) {
      this.bottomRow.push(MAP.PASS);
      return;
    }

    this.bottomRow.push(MAP.FAIL);
  },

  reset() {
    this.topRow = [];
    this.bottomRow = [];
  },

  toString() {
    const map = [this.topRow, this.bottomRow];
    return map.map((row) => `[ ${row.join(' | ')} ]`);
  },
};

module.exports = MapGenerator;
