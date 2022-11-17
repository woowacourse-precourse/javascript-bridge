const MissionUtils = require('@woowacourse/mission-utils');

const InputView = require('./InputView');
class Check {
  static CheckRestartGame(answer, gamePlay) {
    if (answer === 'Q') {
      MissionUtils.Console.close();
      return;
    }
    if (answer === 'R') {
      gamePlay.retry();
      InputView.readBridgeSize(gamePlay);
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
