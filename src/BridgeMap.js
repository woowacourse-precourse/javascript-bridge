const { MOVE_INDEX, RIGHT, WRONG, UNSELECTED } = require('./Constants');

const BridgeMap = {
  generate(answer, userMove) {
    const map = [[], []];
    userMove.forEach((step, index) => {
      if (answer[index] === step) map[MOVE_INDEX[step]].push(RIGHT);
      if (answer[index] !== step) map[MOVE_INDEX[step]].push(WRONG);
      map[1 - MOVE_INDEX[step]].push(UNSELECTED);
    });

    return map;
  },
};

module.exports = BridgeMap;
