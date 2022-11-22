const MissionUtils = require('@woowacourse/mission-utils');
const BridgePrint = require('../BridgePrint');
const { ERROR_MESSAGES, USER_VALID_INPUT } = require('../common/messages');
const Check = {
  checkRestartGame(answer, gamePlay) {
    if (answer === USER_VALID_INPUT.Q) {
      this.endGame(gamePlay);
      MissionUtils.Console.close();
      return;
    }
    if (answer === USER_VALID_INPUT.R) {
      return this.retryGame(gamePlay);
    }
    throw new Error(ERROR_MESSAGES.ERROR_INVAILD_INPUT(USER_VALID_INPUT.Q, USER_VALID_INPUT.R));
  },

  checkIsGameOver(Player, Bridge, isFinshed) {
    if (Player.getIsGameOver()) {
      return Player.getIsGameOver();
    }
    if (isFinshed) return this.checkIsFinshed(Player, Bridge);
  },

  endGame(gamePlay) {
    BridgePrint.printResult(gamePlay);
  },

  retryGame(gamePlay) {
    gamePlay.retry();
    gamePlay.addCount();
    return true;
  },

  checkIsFinshed(Player, Bridge) {
    if (Player.getIsGameOver() === false) {
      Player.setIsWinnging(true);
    }
    Player.setIsGameOver(true);
    return Player.getIsGameOver();
  },
};

module.exports = Check;
