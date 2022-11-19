const BridgeMaker = require("./BridgeMaker.js")
const OutputView = require("./OutputView.js");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator.js");
const { Console } = require("@woowacourse/mission-utils");
const { GameStatus } = require("./GameUtils.js")
const { INPUT_MESSAGE } = require("./Constants");
const BridgeGame = require("./BridgeGame.js")
const { BridgeSizeValid, MovingValid, RetryValid } = require("./InputValid.js");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(INPUT_MESSAGE.SIZE, (answer => {
      try {
        GameStatus.size = new BridgeSizeValid(answer).getSize();
        GameStatus.bridge = BridgeMaker
          .makeBridge(GameStatus.size, BridgeRandomNumberGenerator.generate);
        return this.readMoving();
      } catch (error) {
        OutputView.printError(error);
        return this.readBridgeSize();
      };
    }));
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(INPUT_MESSAGE.MOVE, (answer => {
      try {
        const nextMove = new MovingValid(answer).getMove();
        const bridgeGame = new BridgeGame(nextMove);
        if(bridgeGame.move(nextMove) === false) return this.readGameCommand();
        if(GameStatus.size === GameStatus.step) return OutputView.printResult();
        return this.readMoving();
      } catch (error) {
        OutputView.printError(error)
        return this.readMoving();
      };
    }));
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(INPUT_MESSAGE.RETRY, (answer => {
      try {
        const isRetry = new RetryValid(answer).getRetry();
        const bridgeGame = new BridgeGame();
        bridgeGame.retry(isRetry);
        return this.readMoving();
      } catch (error) {
        OutputView.printError(error);
        return this.readGameCommand();
      };
    }));
  },
};

module.exports = InputView;
