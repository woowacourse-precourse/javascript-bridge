const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('\n다리의 길이를 입력해주세요.\n', (bridgeSize) => {
      const bridgeGame = new BridgeGame(+bridgeSize);
      Console.print('');
      this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (moveAnswer) => {
      OutputView.printMap(bridgeGame, moveAnswer);
      Console.print('');
      if (bridgeGame.checkRemainBridge() && bridgeGame.checkMoveSuccess())
        return this.readMoving(bridgeGame);
      if (bridgeGame.checkRemainBridge() && !bridgeGame.checkMoveSuccess())
        return this.readGameCommand(bridgeGame);
      return OutputView.printResult(bridgeGame);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (retryAnswer) => {
      if (retryAnswer === 'R') {
        bridgeGame.retry();
        return this.readMoving(bridgeGame);
      }
      return OutputView.printResult(bridgeGame);
    });
  },
};

module.exports = InputView;
