const { MOVE_INDEX } = require('./Constants');

const BridgeMap = {
  map: [[], []],
  generate(answer, userMove) {
    this.map = [[], []];
    userMove.forEach((step, index) => {
      if (answer[index] === step) this.map[MOVE_INDEX[step]].push('O');
      if (answer[index] !== step) this.map[MOVE_INDEX[step]].push('X');
      this.map[1 - MOVE_INDEX[step]].push(' ');
    });
  },
};

module.exports = BridgeMap;
