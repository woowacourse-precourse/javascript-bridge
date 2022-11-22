const MoveValidControl = require('./MoveisValid');
const { printMap } = require('../../view/OutputView');
const { catchResultError } = require('../../model/CatchError');

const gameProcess = (gameobj, userindex, bridge) => {
  const currentmove = MoveValidControl();
  const eachProcess = gameobj.moveCaseAction(currentmove, bridge[userindex]);
  printMap(gameobj, userindex);
  return eachProcess;
};

Object.freeze(gameProcess);

module.exports = gameProcess;
