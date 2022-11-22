const MoveValidControl = require('./MoveisValid');
const { printMap } = require('../../OutputView');
const { catchResultError } = require('../../model/CatchError');

const gameProcess = (gameobj, userindex, bridge) => {
  const currentmove = MoveValidControl();
  const resultCompare = catchResultError(
    gameobj,
    currentmove,
    bridge[userindex]
  );
  printMap(gameobj, userindex);
  return resultCompare;
};

Object.freeze(gameProcess);

module.exports = gameProcess;
