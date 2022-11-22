const MoveValidControl = require('./MoveisValid');
const { printMap } = require('../../view/OutputView');
const { catchResultError } = require('../../model/CatchError');

const gameProcess = (gameobj, userindex, bridge) => {
  const currentmove = MoveValidControl();
  const processResult = catchResultError(
    gameobj,
    currentmove,
    bridge[userindex]
  );
  printMap(gameobj, userindex);
  return processResult;
};

Object.freeze(gameProcess);

module.exports = gameProcess;
