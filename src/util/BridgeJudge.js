const { GAME, SIDE } = require('./Message');

function BridgeJudge(bridge, commands) {
  const sideJudgeResult = {
    up: [],
    down: [],
  };
  commands.forEach((command, index) => {
    checkEqualSide(bridge[index], command, sideJudgeResult);
  });
  return sideJudgeResult;
}
function checkEqualSide(bridgeSide, commandSide, sideJudgeResult) {
  switch (commandSide) {
    case SIDE.UP_STR:
      checkUpside(bridgeSide, commandSide, sideJudgeResult);
      break;
    case SIDE.DOWN_STR:
      checkDownSide(bridgeSide, commandSide, sideJudgeResult);
      break;
  }
}
function checkUpside(bridgeSide, commandSide, sideJudgeResult) {
  if (bridgeSide === commandSide) {
    matchUpside(sideJudgeResult);
    return;
  }
  unMatchUpside(sideJudgeResult);
}
function checkDownSide(bridgeSide, commandSide, sideJudgeResult) {
  if (bridgeSide === commandSide) {
    matchDownside(sideJudgeResult);
    return;
  }
  unMatchDownside(sideJudgeResult);
}
function matchUpside(sideJudgeResult) {
  sideJudgeResult['up'].push(GAME.MATCH);
  sideJudgeResult['down'].push(GAME.BLANK);
}
function unMatchUpside(sideJudgeResult) {
  sideJudgeResult['up'].push(GAME.MISMATCH);
  sideJudgeResult['down'].push(GAME.BLANK);
}
function matchDownside(sideJudgeResult) {
  sideJudgeResult['down'].push(GAME.MATCH);
  sideJudgeResult['up'].push(GAME.BLANK);
}
function unMatchDownside(sideJudgeResult) {
  sideJudgeResult['down'].push(GAME.MISMATCH);
  sideJudgeResult['up'].push(GAME.BLANK);
}
module.exports = BridgeJudge;
