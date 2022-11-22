const moveCaseAction = require('../../BridgeGame');

const moveCompare = (gameobj, usermove, eachbridge) =>
  gameobj.moveCaseAction(usermove, eachbridge);

Object.freeze(moveCompare);
module.exports = moveCompare;
