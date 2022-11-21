const { MOVE_INDEX, RIGHT, WRONG } = require('./Constants');

const BridgeMap = {
  map: [[], []],
  generate(answer, userMove) {
    this.map = [[], []];
    userMove.forEach((step, index) => {
      if (answer[index] === step) this.map[MOVE_INDEX[step]].push(RIGHT);
      if (answer[index] !== step) this.map[MOVE_INDEX[step]].push(WRONG);
      this.map[1 - MOVE_INDEX[step]].push(' ');
    });
  },
};

module.exports = BridgeMap;
