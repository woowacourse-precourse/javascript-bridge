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
      this.checkBridgeLength(+bridgeSize);
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
      if (this.checkMoveInput(moveAnswer)) return this.readMoving(bridgeGame);
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
      if (this.checkRestartInput(retryAnswer)) return this.readGameCommand(bridgeGame);
      if (retryAnswer === 'R') {
        bridgeGame.retry();
        return this.readMoving(bridgeGame);
      }
      return OutputView.printResult(bridgeGame);
    });
  },
  checkBridgeLength(bridgeSize) {
    try {
      if (!(bridgeSize >= 3 && bridgeSize <= 20))
        throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    } catch (err) {
      Console.print(err);
      return this.readBridgeSize();
    }
  },
  checkMoveInput(moveAnswer) {
    try {
      if (!(moveAnswer === 'U' || moveAnswer === 'D')) 
        throw new Error("[ERROR] U와 D중 하나의 문자를 입력해주세요.");
    } catch (err) {
      Console.print(err);
      return true;
    }
  },
  checkRestartInput(retryAnswer) {
    try {
      if (!(retryAnswer === 'R' || retryAnswer === 'Q')) 
        throw new Error("[ERROR] R과 Q중 하나의 문자를 입력해주세요.");
    } catch (err) {
      Console.print(err);
      return true;
    }
  },
};

module.exports = InputView;
