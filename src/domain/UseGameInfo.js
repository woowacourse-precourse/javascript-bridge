const { MAKE_MAP, MOVE_VALID } = require("../constants/constant");
const { GameInfo } = require("./GameInfo");

const UseGameInfo = {
  makeOutput(upOrDown, nextMove) {
    const output = [MAKE_MAP.open];
    for (let i = 0; i < GameInfo.position; i++) {
      output.push(this.alreadyPass(upOrDown, i));
    };
    output.push(this.makeNextMoveOutput(upOrDown, nextMove));
    return output;
  },

  alreadyPass(upOrDown, i) {
    if (GameInfo.bridge[i] === MOVE_VALID[upOrDown]) {
      return MAKE_MAP.pass;
    };
    return MAKE_MAP.empty;
  },

  makeNextMoveOutput(upOrDown, nextMove) {
    if (MOVE_VALID[upOrDown] !== nextMove) {
      return MAKE_MAP.close;
    }
    if (GameInfo.bridge[GameInfo.position] !== nextMove) {
      GameInfo.gameResult = false;
      return MAKE_MAP.failure;
    }
    return MAKE_MAP.success;
  },
}

module.exports = UseGameInfo;
