const { MOVING } = require('../utils/constants');

const MARK = Object.create({
  PASS: 'O',
  FAIL: 'X',
  BLANK: ' ',
});

const MovingHistory = {
  topRow: [],

  bottomRow: [],

  log(bridge, stage, moving) {
    if (moving === MOVING.UPPER) {
      this.generateTopRow(bridge, stage, moving);
      this.bottomRow.push(MARK.BLANK);
      return;
    }

    this.generateBottomRow(bridge, stage, moving);
    this.topRow.push(MARK.BLANK);
  },

  generateTopRow(bridge, stage, moving) {
    if (bridge[stage] === moving) {
      this.topRow.push(MARK.PASS);
      return;
    }

    this.topRow.push(MARK.FAIL);
  },

  generateBottomRow(bridge, stage, moving) {
    if (bridge[stage] === moving) {
      this.bottomRow.push(MARK.PASS);
      return;
    }

    this.bottomRow.push(MARK.FAIL);
  },

  reset() {
    this.topRow = [];
    this.bottomRow = [];
  },

  toString() {
    const movingHistory = [this.topRow, this.bottomRow];
    return movingHistory.map((row) => `[ ${row.join(' | ')} ]`);
  },
};

module.exports = MovingHistory;
