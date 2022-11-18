const MissionUtils = require('@woowacourse/mission-utils');
const BridgePrint = require('./BridgePrint');
class Check {
  static CheckRestartGame(answer, gamePlay) {
    if (answer === 'Q') {
      BridgePrint.printResult(gamePlay);
      MissionUtils.Console.close();
      return;
    }
    if (answer === 'R') {
      gamePlay.retry();
      gamePlay.addCount();
      return true;
    }
    throw new Error(ERROR_MESSAGES.ERROR_INVAILD_INPUT('Q', 'R'));
  }
  static checkIsGameOver(isGameOver, index, brigeShape) {
    if (isGameOver) {
      return isGameOver;
    }
    if (index === brigeShape) {
      isGameOver = true;
      return isGameOver;
    }
  }
  static isVaildInput(input) {
    if (input === 'U' || input === 'D') return;
    throw new Error(ERROR_MESSAGES.ERROR_INVAILD_INPUT('U', 'D'));
  }
}

module.exports = Check;
