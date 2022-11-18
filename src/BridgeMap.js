const { MOVE_INDEX } = require('./Constants');

// FIXME: change logic of bridgemap generate function
const BridgeMap = {
  map: [[], []],
  generate(answer, userMove) {
    this.map = [[], []];
    userMove.forEach((step, index) => {
      if (answer[index] === step) {
        this.map[MOVE_INDEX[step]].push('O');
      } else {
        this.map[MOVE_INDEX[step]].push('X');
      }
      this.map[1 - MOVE_INDEX[step]].push(' ');
    });
  },
};

module.exports = BridgeMap;
