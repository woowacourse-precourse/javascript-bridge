const { Console } = require("@woowacourse/mission-utils");
const { BridgeSizeValid, MovingValid, RetryValid } = require("./InputValid.js");
const BridgeGame = require("./BridgeGame.js")
const GameStatus = require("./GameStatus.js")
const BridgeMaker = require("./BridgeMaker.js")
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator.js");
const OutputView = require("./OutputView.js");
const { printSizeError, printMoveError, printRetryError } = require("./OutputView.js");
const GameUtils = require("./GameUtils.js");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (answer => {
      try {
        GameStatus.size = new BridgeSizeValid(answer).getSize();
        GameStatus.bridge = BridgeMaker
          .makeBridge(GameStatus.size, BridgeRandomNumberGenerator.generate).slice();
        return this.readMoving();
      } catch (e) {
        printSizeError()
        return this.readBridgeSize();
      }
    }))
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (answer => {
      try {
        const nextMove = new MovingValid(answer).getMove()
        const bridgeGame = new BridgeGame(nextMove)
        if(bridgeGame.move(nextMove) === false) return this.readGameCommand();
        if(GameStatus.size === GameStatus.step) return OutputView.printResult();
        return this.readMoving();
      } catch (e) {
        printMoveError()
        return this.readMoving();
      }
    }))
  },


  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (answer => {
      try {
        const retry = new RetryValid(answer).getRetry();
        const bridgeGame = new BridgeGame();
        if(retry === 'Q') {
          return OutputView.printResult();
        }
        bridgeGame.retry();
        return this.readMoving();
      } catch (e) {
        printRetryError();
        return this.readGameCommand();
      }
    }))
  },
};

module.exports = { InputView, GameStatus };
