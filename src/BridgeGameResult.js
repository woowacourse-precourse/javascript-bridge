const { GAME_RESULT } = require("./utils/Constants");

const BridgeGameResult = {
  isSuccess(isEnd) {
    return isEnd ? "성공" : "실패";
  },
  gameResult(isEnd, attempts) {
    return `게임 성공 여부: ${BridgeGameResult.isSuccess(
      isEnd
    )} \n총 시도한 횟수: ${attempts}`;
  },
};
module.exports = BridgeGameResult;
