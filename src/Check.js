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
    throw new Error('잘못된 입력을 하였습니다.');
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
}

module.exports = Check;
