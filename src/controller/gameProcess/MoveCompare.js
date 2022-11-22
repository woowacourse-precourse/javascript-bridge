const moveCaseAction = require('../../model/domainmodel/BridgeGame');

const moveCompare = (gameobj, usermove, eachbridge) =>
  gameobj.moveCaseAction(usermove, eachbridge);

Object.freeze(moveCompare);
module.exports = moveCompare;
